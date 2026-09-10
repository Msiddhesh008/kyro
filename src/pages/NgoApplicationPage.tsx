import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'

import { USE_MOCK } from '../constants'
import { Input, Textarea } from '../components/ui/FieldControls'
import { Select } from '../components/ui/Select'
import { useAppSelector } from '../hooks/redux'
import { useSubmitNgoApplicationMutation } from '../services/api'
import { submitMockNgoApplication } from '../services/ngoMockService'
import formStyles from '../styles/forms.module.css'
import type {
  NgoApplicationRequest,
  NgoCause,
  NgoRegistrationType,
} from '../types/ngo'

const REGISTRATION_OPTIONS: { value: NgoRegistrationType; label: string }[] = [
  { value: 'trust', label: 'Yes - As a Trust' },
  { value: 'society', label: 'Yes - As a Society' },
  { value: 'section8', label: 'Yes - As a Section 8 / Section 25 Company' },
  { value: 'not_registered', label: 'No - Sign up as an individual instead' },
]

const CAUSES: NgoCause[] = [
  'Children',
  'Education',
  'Women & Girls',
  'Medical',
  'Sports',
  'Animals',
  'Senior Citizens',
  'Disability',
  'Environment',
  'Disaster Relief',
  'Rural Development',
  'Community Development',
  'Arts, Music & Culture',
  'Food & Hunger',
  'Healthcare',
  'Skill Development',
]

const emptyForm: NgoApplicationRequest = {
  registrationType: 'trust',
  organizationName: '',
  registeredAddress: '',
  city: '',
  cause: 'Medical',
  founderNames: '',
  founderLinkedIn: '',
}

export function NgoApplicationPage() {
  const [form, setForm] = useState<NgoApplicationRequest>(emptyForm)
  const [notice, setNotice] = useState('')
  const token = useAppSelector((state) => state.auth.accessToken)
  const user = useAppSelector((state) => state.auth.user)
  const [submitApplication, { isLoading }] = useSubmitNgoApplicationMutation()

  const update = <K extends keyof NgoApplicationRequest>(
    key: K,
    value: NgoApplicationRequest[K],
  ) => {
    setForm((current) => ({ ...current, [key]: value }))
  }

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (form.registrationType === 'not_registered') {
      setNotice('Use individual signup instead of an NGO application.')
      return
    }
    if (!token) {
      setNotice('Please log in before submitting an NGO application.')
      return
    }
    setNotice('')

    if (USE_MOCK) {
      submitMockNgoApplication(form, {
        email: user?.email ?? 'user@kyro.test',
        name: user?.name ?? 'Applicant',
      })
      setNotice(
        'Application submitted. An admin can approve it from Admin → NGO.',
      )
      return
    }

    submitApplication(form)
      .unwrap()
      .then(() => {
        setNotice('Application submitted. An admin will review it.')
      })
      .catch(() => {
        setNotice('Could not submit application. Log in and try again.')
      })
  }

  return (
    <div className={formStyles.page}>
      <div className={formStyles.wide}>
        <h1 className={formStyles.title}>Nonprofit application</h1>
        <p className={formStyles.lead}>
          Register your organisation to fundraise on Kyro with a verified badge.
        </p>

        <form className={formStyles.form} onSubmit={onSubmit}>
          <div className={formStyles.field}>
            <label htmlFor="ngo-reg">Is your organisation a registered Non-Profit?</label>
            <Select
              id="ngo-reg"
              value={form.registrationType}
              onChange={(next) => {
                update('registrationType', next as NgoRegistrationType)
              }}
              options={REGISTRATION_OPTIONS}
            />
          </div>

          {form.registrationType === 'not_registered' ? (
            <p className={formStyles.hint}>
              Continue as an individual fundraiser via{' '}
              <Link to="/signup">Sign up</Link>.
            </p>
          ) : (
            <>
              <div className={formStyles.field}>
                <label htmlFor="ngo-name">Name of the organization</label>
                <Input
                  id="ngo-name"
                  value={form.organizationName}
                  onChange={(event) => {
                    update('organizationName', event.target.value)
                  }}
                  required
                />
              </div>
              <div className={formStyles.field}>
                <label htmlFor="ngo-address">Organization&apos;s registered address</label>
                <Textarea
                  id="ngo-address"
                  value={form.registeredAddress}
                  onChange={(event) => {
                    update('registeredAddress', event.target.value)
                  }}
                  required
                />
              </div>
              <div className={formStyles.field}>
                <label htmlFor="ngo-city">City</label>
                <Input
                  id="ngo-city"
                  value={form.city}
                  onChange={(event) => {
                    update('city', event.target.value)
                  }}
                  required
                />
              </div>
              <div className={formStyles.field}>
                <label htmlFor="ngo-cause">Cause supported (main area of work)</label>
                <Select
                  id="ngo-cause"
                  value={form.cause}
                  onChange={(next) => {
                    update('cause', next as NgoCause)
                  }}
                  options={CAUSES.map((cause) => ({
                    value: cause,
                    label: cause,
                  }))}
                />
              </div>
              <div className={formStyles.field}>
                <label htmlFor="ngo-founders">Founder&apos;s name(s)</label>
                <Input
                  id="ngo-founders"
                  value={form.founderNames}
                  onChange={(event) => {
                    update('founderNames', event.target.value)
                  }}
                  required
                />
              </div>
              <div className={formStyles.field}>
                <label htmlFor="ngo-linkedin">Founder&apos;s LinkedIn (optional)</label>
                <Input
                  id="ngo-linkedin"
                  type="url"
                  placeholder="https://linkedin.com/in/..."
                  value={form.founderLinkedIn}
                  onChange={(event) => {
                    update('founderLinkedIn', event.target.value)
                  }}
                />
              </div>
            </>
          )}

          <div className={formStyles.actions}>
            <button type="submit" className="btn btn-primary" disabled={isLoading}>
              {isLoading ? 'Submitting…' : 'Submit application'}
            </button>
            <Link to="/" className="btn btn-ghost">
              Cancel
            </Link>
          </div>
          {notice ? <p className={formStyles.hint}>{notice}</p> : null}
        </form>
      </div>
    </div>
  )
}
