import { useState, type FormEvent } from 'react'

import {
  MONTHLY_DEFAULT_AMOUNT,
  MONTHLY_MIN_AMOUNT,
  MONTHLY_PRESETS,
} from '../../constants/monthlyGiving'
import formStyles from '../../styles/forms.module.css'
import styles from './MonthlyPledgeForm.module.css'

export function MonthlyPledgeForm() {
  const [amount, setAmount] = useState(MONTHLY_DEFAULT_AMOUNT)
  const [customAmount, setCustomAmount] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')

  const isPreset = MONTHLY_PRESETS.includes(
    amount as (typeof MONTHLY_PRESETS)[number],
  )

  const onSelectPreset = (value: number) => {
    setAmount(value)
    setCustomAmount('')
    setError('')
    setNotice('')
  }

  const onCustomChange = (raw: string) => {
    setCustomAmount(raw)
    const parsed = Number(raw)
    if (Number.isFinite(parsed) && parsed > 0) {
      setAmount(parsed)
    }
    setError('')
    setNotice('')
  }

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    setError('')
    setNotice('')

    if (amount < MONTHLY_MIN_AMOUNT) {
      setError(`Minimum pledge is ₹${MONTHLY_MIN_AMOUNT}/mo.`)
      return
    }
    if (!name.trim() || !email.trim() || !mobile.trim()) {
      setError('Name, email, and mobile are required.')
      return
    }

    setNotice(`Pledge of ₹${amount}/mo recorded. Thank you, ${name.trim()}.`)
  }

  return (
    <form
      id="pledge"
      className={`${formStyles.form} ${styles.form}`}
      onSubmit={onSubmit}
      noValidate
    >
      <header className={styles.header}>
        <h1 className={styles.title}>Social Impact Plan</h1>
        <p className={styles.lead}>
          Join our community of monthly contributors providing urgent medical
          care to children.
        </p>
      </header>

      <div className={styles.presets} role="group" aria-label="Monthly amount">
        {MONTHLY_PRESETS.map((preset) => (
          <button
            key={preset}
            type="button"
            className={
              amount === preset && isPreset ? styles.presetActive : styles.preset
            }
            onClick={() => {
              onSelectPreset(preset)
            }}
          >
            ₹{preset}/mo
          </button>
        ))}
      </div>

      <div className={formStyles.field}>
        <label htmlFor="monthly-other">Other amount</label>
        <input
          id="monthly-other"
          type="number"
          min={MONTHLY_MIN_AMOUNT}
          inputMode="numeric"
          placeholder="Enter amount"
          value={customAmount}
          onChange={(event) => {
            onCustomChange(event.target.value)
          }}
        />
      </div>

      <div className={formStyles.field}>
        <label htmlFor="monthly-name">Name *</label>
        <input
          id="monthly-name"
          name="name"
          autoComplete="name"
          required
          value={name}
          onChange={(event) => {
            setName(event.target.value)
          }}
        />
      </div>

      <div className={formStyles.field}>
        <label htmlFor="monthly-email">Email address *</label>
        <input
          id="monthly-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => {
            setEmail(event.target.value)
          }}
        />
      </div>

      <div className={formStyles.field}>
        <label htmlFor="monthly-mobile">Mobile number *</label>
        <input
          id="monthly-mobile"
          name="mobile"
          type="tel"
          autoComplete="tel"
          required
          value={mobile}
          onChange={(event) => {
            setMobile(event.target.value)
          }}
        />
        <p className={formStyles.hint}>
          All payment updates will be sent on this number.
        </p>
      </div>

      {error ? <p className={formStyles.error}>{error}</p> : null}
      {notice ? <p className={styles.notice}>{notice}</p> : null}

      <button type="submit" className={`btn btn-primary ${styles.submit}`}>
        Pledge ₹{amount} / Month
      </button>

      <p className={styles.socialProof}>
        <span className={styles.avatars} aria-hidden="true">
          <span /><span /><span />
        </span>
        4,21,908 contributors are giving monthly
      </p>
    </form>
  )
}
