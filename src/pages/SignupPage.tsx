import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { USE_MOCK } from '../constants'
import { useAppDispatch } from '../hooks/redux'
import { useRegisterMutation } from '../services/api'
import { setCredentials } from '../store/authSlice'
import formStyles from '../styles/forms.module.css'
import type { RegisterRequest } from '../types/auth'

export function SignupPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState<RegisterRequest['role']>('fundraiser')
  const [notice, setNotice] = useState('')
  const [register, { isLoading }] = useRegisterMutation()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    setNotice('')

    if (USE_MOCK) {
      dispatch(
        setCredentials({
          accessToken: 'mock-token',
          user: {
            id: 'mock-user',
            email: email.trim(),
            name: name.trim(),
            role,
            createdAt: new Date().toISOString(),
          },
        }),
      )
      navigate(role === 'fundraiser' ? '/campaigns/new' : '/campaigns')
      return
    }

    register({
      name: name.trim(),
      email: email.trim(),
      password,
      role,
    })
      .unwrap()
      .then((result) => {
        dispatch(
          setCredentials({
            accessToken: result.accessToken,
            user: result.user,
          }),
        )
        navigate(role === 'fundraiser' ? '/campaigns/new' : '/campaigns')
      })
      .catch(() => {
        setNotice('Signup failed. Email may already be registered.')
      })
  }

  return (
    <div className={formStyles.page}>
      <div className={formStyles.narrow}>
        <h1 className={formStyles.title}>Create account</h1>
        <p className={formStyles.lead}>
          Join as a donor or start raising funds on Kyro.
          {USE_MOCK ? ' Any email works — no server required.' : ''}
        </p>
        <form className={formStyles.form} onSubmit={onSubmit}>
          <div className={formStyles.field}>
            <label htmlFor="signup-name">Full name</label>
            <input
              id="signup-name"
              value={name}
              onChange={(event) => {
                setName(event.target.value)
              }}
              required
            />
          </div>
          <div className={formStyles.field}>
            <label htmlFor="signup-email">Email</label>
            <input
              id="signup-email"
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
            <label htmlFor="signup-password">Password</label>
            <input
              id="signup-password"
              type="password"
              autoComplete="new-password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value)
              }}
              minLength={8}
              required
            />
          </div>
          <div className={formStyles.field}>
            <label htmlFor="signup-role">I want to</label>
            <select
              id="signup-role"
              value={role}
              onChange={(event) => {
                setRole(event.target.value as RegisterRequest['role'])
              }}
            >
              <option value="fundraiser">Raise funds</option>
              <option value="donor">Donate to causes</option>
            </select>
          </div>
          <div className={formStyles.actions}>
            <button type="submit" className="btn btn-primary" disabled={isLoading}>
              {isLoading ? 'Creating…' : 'Sign up'}
            </button>
          </div>
          {notice ? <p className={formStyles.hint}>{notice}</p> : null}
        </form>
        <p className={formStyles.altLink}>
          Already have an account? <Link to="/login">Log in</Link>
          <br />
          Representing an NGO? <Link to="/ngo/apply">Apply as a nonprofit</Link>
        </p>
      </div>
    </div>
  )
}
