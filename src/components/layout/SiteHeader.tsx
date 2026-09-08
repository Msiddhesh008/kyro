import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { APP_NAME } from '../../constants'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { clearCredentials } from '../../store/authSlice'
import styles from './SiteHeader.module.css'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const user = useAppSelector((state) => state.auth.user)
  const dispatch = useAppDispatch()
  const isAdmin = user?.role === 'admin' || user?.email === 'admin@kyro.test'

  const closeMenu = () => {
    setOpen(false)
  }

  const onLogout = () => {
    dispatch(clearCredentials())
    closeMenu()
  }

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.brand} onClick={closeMenu}>
          {APP_NAME}
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          <NavLink
            to="/campaigns"
            className={({ isActive }) => (isActive ? styles.aActive : undefined)}
          >
            Browse campaigns
          </NavLink>
          <NavLink
            to="/monthly"
            className={({ isActive }) => (isActive ? styles.aActive : undefined)}
          >
            Monthly giving
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.aActive : undefined)}
          >
            About
          </NavLink>
          {user ? (
            <NavLink
              to="/my-campaigns"
              className={({ isActive }) =>
                isActive ? styles.aActive : undefined
              }
            >
              My campaigns
            </NavLink>
          ) : null}
          <NavLink
            to="/ngo/apply"
            className={({ isActive }) => (isActive ? styles.aActive : undefined)}
          >
            For nonprofits
          </NavLink>
          {isAdmin ? (
            <NavLink
              to="/admin/ngo"
              className={({ isActive }) =>
                isActive ? styles.aActive : undefined
              }
            >
              Admin
            </NavLink>
          ) : null}
          {user ? (
            <button type="button" className={styles.linkBtn} onClick={onLogout}>
              Log out ({user.name})
            </button>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? styles.aActive : undefined
              }
            >
              Log in
            </NavLink>
          )}
        </nav>

        <div className={styles.actions}>
          <Link to="/campaigns/new" className="btn btn-primary">
            Start a fundraiser
          </Link>
          <button
            type="button"
            className={styles.menuBtn}
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => {
              setOpen((value) => !value)
            }}
          >
            <span aria-hidden="true">{open ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {open ? (
        <nav className={styles.mobileNav} aria-label="Mobile">
          <Link to="/campaigns" onClick={closeMenu}>
            Browse campaigns
          </Link>
          <Link to="/monthly" onClick={closeMenu}>
            Monthly giving
          </Link>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
          {user ? (
            <Link to="/my-campaigns" onClick={closeMenu}>
              My campaigns
            </Link>
          ) : null}
          <Link to="/campaigns/new" onClick={closeMenu}>
            Start a fundraiser
          </Link>
          <Link to="/ngo/apply" onClick={closeMenu}>
            For nonprofits
          </Link>
          {isAdmin ? (
            <Link to="/admin/ngo" onClick={closeMenu}>
              Admin
            </Link>
          ) : null}
          {user ? (
            <button type="button" onClick={onLogout}>
              Log out
            </button>
          ) : (
            <>
              <Link to="/login" onClick={closeMenu}>
                Log in
              </Link>
              <Link to="/signup" onClick={closeMenu}>
                Sign up
              </Link>
            </>
          )}
        </nav>
      ) : null}
    </header>
  )
}
