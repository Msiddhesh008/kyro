import { useState, type FormEvent } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { USE_MOCK } from '../constants'
import { useAppDispatch } from '../hooks/redux'
import { useLoginMutation } from '../services/api'
import { setCredentials } from '../store/authSlice'
import formStyles from '../styles/forms.module.css'
import type { UserRole } from '../types/auth'

function resolveMockRole(email: string): UserRole {
  return email.trim().toLowerCase() === 'admin@kyro.test' ? 'admin' : 'fundraiser'
}

export function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [notice, setNotice] = useState('')
  const [login, { isLoading }] = useLoginMutation()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const from =
    (location.state as { from?: string } | null)?.from ?? '/campaigns'

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    setNotice('')
    const trimmedEmail = email.trim()

    if (USE_MOCK) {
      const role = resolveMockRole(trimmedEmail)
      dispatch(
        setCredentials({
          accessToken: 'mock-token',
          user: {
            id: role === 'admin' ? 'mock-admin' : 'mock-user',
            email: trimmedEmail,
            name:
              role === 'admin'
                ? 'Kyro Admin'
                : trimmedEmail.split('@')[0] || 'User',
            role,
            createdAt: new Date().toISOString(),
          },
        }),
      )
      navigate(role === 'admin' ? '/admin/ngo' : from, { replace: true })
      return
    }

    login({ email: trimmedEmail, password })
      .unwrap()
      .then((result) => {
        dispatch(
          setCredentials({
            accessToken: result.accessToken,
            user: result.user,
          }),
        )
        navigate(from, { replace: true })
      })
      .catch(() => {
        setNotice('Login failed. Check your email and password.')
      })
  }

  return (
    <div className={formStyles.page}>
      <div className={formStyles.narrow}>
        <h1 className={formStyles.title}>Log in</h1>
        <p className={formStyles.lead}>
          Access your Kyro fundraisers and donations.
          {USE_MOCK
            ? ' Any email works. Use admin@kyro.test for NGO review.'
            : ''}
        </p>
        <form className={formStyles.form} onSubmit={onSubmit}>
          <div className={formStyles.field}>
            <label htmlFor="login-email">Email</label>
            <input
              id="login-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
              }}
              required
            />
          </div>
          <div className={formStyles.field}>
            <label htmlFor="login-password">Password</label>
            <input
              id="login-password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value)
              }}
              required
            />
          </div>
          <div className={formStyles.actions}>
            <button type="submit" className="btn btn-primary" disabled={isLoading}>
              {isLoading ? 'Signing in…' : 'Log in'}
            </button>
          </div>
          {notice ? <p className={formStyles.error}>{notice}</p> : null}
        </form>
        <p className={formStyles.altLink}>
          New to Kyro? <Link to="/signup">Create an account</Link>
        </p>
      </div>
    </div>
  )
}
