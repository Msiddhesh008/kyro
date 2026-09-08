import { useEffect, useRef, useState, type FormEvent } from 'react'

import { USE_MOCK } from '../../constants'
import { useCreateDonationMutation } from '../../services/api'
import { applyMockDonation } from '../../services/campaignService'
import formStyles from '../../styles/forms.module.css'
import styles from './DonateModal.module.css'

interface DonateModalProps {
  campaignId: string
  campaignTitle: string
  onClose: () => void
}

const PRESETS = [500, 1000, 2500, 5000]
const MIN_AMOUNT = 100
const SUCCESS_CLOSE_MS = 1600

export function DonateModal({
  campaignId,
  campaignTitle,
  onClose,
}: DonateModalProps) {
  const [amount, setAmount] = useState(1000)
  const [donorName, setDonorName] = useState('')
  const [donorEmail, setDonorEmail] = useState('')
  const [isAnonymous, setIsAnonymous] = useState(false)
  const [notice, setNotice] = useState('')
  const [error, setError] = useState('')
  const [createDonation, { isLoading }] = useCreateDonationMutation()
  const closeTimer = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (closeTimer.current !== null) {
        window.clearTimeout(closeTimer.current)
      }
    }
  }, [])

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    setNotice('')
    setError('')

    if (amount < MIN_AMOUNT) {
      setError(`Minimum donation is ₹${MIN_AMOUNT}.`)
      return
    }

    if (USE_MOCK) {
      applyMockDonation(campaignId, amount)
      setNotice(`Thank you — ₹${amount} recorded.`)
      closeTimer.current = window.setTimeout(() => {
        onClose()
      }, SUCCESS_CLOSE_MS)
      return
    }

    createDonation({
      campaignId,
      amount,
      donorName: isAnonymous ? 'Anonymous' : donorName.trim(),
      donorEmail: donorEmail.trim(),
      isAnonymous,
    })
      .unwrap()
      .then((result) => {
        setNotice(`Order ${result.razorpayOrder.id} created.`)
      })
      .catch(() => {
        setError('Could not start donation. Try again.')
      })
  }

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-labelledby="donate-title"
    >
      <div className={styles.panel}>
        <h2 id="donate-title" className={styles.title}>
          Donate
        </h2>
        <p className={styles.lead}>Support “{campaignTitle}”</p>

        <form className={styles.compactForm} onSubmit={onSubmit} noValidate>
          <div className={formStyles.field}>
            <span id="amount-label">Amount (INR)</span>
            <div
              className={styles.presets}
              role="group"
              aria-labelledby="amount-label"
            >
              {PRESETS.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  className={
                    amount === preset ? 'btn btn-primary' : 'btn btn-ghost'
                  }
                  onClick={() => {
                    setAmount(preset)
                    setError('')
                  }}
                >
                  ₹{preset}
                </button>
              ))}
            </div>
            <input
              type="number"
              min={MIN_AMOUNT}
              step={100}
              value={amount}
              onChange={(event) => {
                setAmount(Number(event.target.value))
                setError('')
              }}
            />
            {error ? <p className={formStyles.error}>{error}</p> : null}
          </div>

          <div className={formStyles.field}>
            <label htmlFor="donor-name">Name</label>
            <input
              id="donor-name"
              value={donorName}
              onChange={(event) => {
                setDonorName(event.target.value)
              }}
              disabled={isAnonymous}
              required={!isAnonymous}
            />
          </div>

          <div className={formStyles.field}>
            <label htmlFor="donor-email">Email</label>
            <input
              id="donor-email"
              type="email"
              value={donorEmail}
              onChange={(event) => {
                setDonorEmail(event.target.value)
              }}
              required
            />
          </div>

          <label className={formStyles.checkRow}>
            <input
              type="checkbox"
              checked={isAnonymous}
              onChange={(event) => {
                setIsAnonymous(event.target.checked)
              }}
            />
            Donate anonymously
          </label>

          <div className={styles.actions}>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isLoading}
            >
              {isLoading ? 'Creating order…' : 'Continue to pay'}
            </button>
            <button type="button" className="btn btn-ghost" onClick={onClose}>
              Cancel
            </button>
          </div>
          {notice ? <p className={styles.notice}>{notice}</p> : null}
        </form>
      </div>
    </div>
  )
}
