import { useState } from 'react'
import { Link } from 'react-router-dom'

import { TrustPageLayout } from '../components/trust/TrustPageLayout'
import { HELP_FAQS, TRUST_CONTACT } from '../constants/trustContent'
import styles from './HelpPage.module.css'

export function HelpPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <TrustPageLayout
      title="FAQs & Help Center"
      lead="Answers for donors and fundraisers—starting a campaign, withdrawals, fees, and how to reach us."
    >
      <div className={styles.list}>
        {HELP_FAQS.map((faq, index) => {
          const isOpen = openIndex === index
          return (
            <div
              key={faq.id}
              id={faq.id}
              className={styles.item}
            >
              <button
                type="button"
                className={styles.question}
                aria-expanded={isOpen}
                onClick={() => {
                  setOpenIndex(isOpen ? null : index)
                }}
              >
                <span>{faq.question}</span>
                <span aria-hidden="true">{isOpen ? '▴' : '▾'}</span>
              </button>
              {isOpen ? <p className={styles.answer}>{faq.answer}</p> : null}
            </div>
          )
        })}
      </div>

      <section id="contact" className={styles.contact}>
        <h2>Contact us</h2>
        <p>
          Email{' '}
          <a href={`mailto:${TRUST_CONTACT.email}`}>{TRUST_CONTACT.email}</a> or
          call{' '}
          <a href={`tel:${TRUST_CONTACT.phone.replace(/\s/g, '')}`}>
            {TRUST_CONTACT.phone}
          </a>
          . For campaign integrity issues, visit{' '}
          <Link to="/trust-safety">Trust &amp; Safety</Link>.
        </p>
      </section>
    </TrustPageLayout>
  )
}
