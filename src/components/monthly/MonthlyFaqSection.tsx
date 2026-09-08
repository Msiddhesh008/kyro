import { useState } from 'react'

import { MONTHLY_FAQS } from '../../constants/monthlyGiving'
import styles from './MonthlyFaqSection.module.css'

export function MonthlyFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className={styles.section} aria-labelledby="faq-heading">
      <div className="container">
        <h2 id="faq-heading" className={styles.title}>
          FAQs
        </h2>
        <div className={styles.rule} aria-hidden="true" />

        <div className={styles.list}>
          {MONTHLY_FAQS.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={faq.question} className={styles.item}>
                <button
                  type="button"
                  className={styles.question}
                  aria-expanded={isOpen}
                  onClick={() => {
                    setOpenIndex(isOpen ? null : index)
                  }}
                >
                  <span>{faq.question}</span>
                  <span className={styles.chevron} aria-hidden="true">
                    {isOpen ? '▴' : '▾'}
                  </span>
                </button>
                {isOpen ? <p className={styles.answer}>{faq.answer}</p> : null}
              </div>
            )
          })}
        </div>

        <div className={styles.footer}>
          <p>
            Some fundraisers are not eligible for tax deduction such as 80G,
            501(c), etc. Any questions?
          </p>
          <div className={styles.chats}>
            <a
              className={styles.messenger}
              href="https://m.me/"
              target="_blank"
              rel="noreferrer"
            >
              Chat with us
            </a>
            <a
              className={styles.whatsapp}
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
            >
              Chat with us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
