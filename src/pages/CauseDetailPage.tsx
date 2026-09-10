import { Link, Navigate, useParams } from 'react-router-dom'

import { APP_NAME } from '../constants'
import { CAUSE_PAGES, isCauseSlug } from '../constants/causePages'
import styles from './CauseDetailPage.module.css'

export function CauseDetailPage() {
  const { slug = '' } = useParams()
  if (!isCauseSlug(slug)) {
    return <Navigate to="/" replace />
  }

  const cause = CAUSE_PAGES[slug]

  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <img
          className={styles.heroImage}
          src={cause.heroImageUrl}
          alt={cause.heroImageAlt}
        />
        <div className={styles.heroScrim} />
        <div className={`container ${styles.heroContent}`}>
          <p className={styles.eyebrow}>{cause.label}</p>
          <h1 className={styles.heroTitle}>{cause.heroTitle}</h1>
          <p className={styles.heroLead}>{cause.heroLead}</p>
          <div className={styles.heroActions}>
            <Link to="/campaigns/new" className="btn btn-primary">
              Start a fundraiser
            </Link>
            <Link to={cause.browseTo} className="btn btn-secondary">
              Browse related campaigns
            </Link>
          </div>
        </div>
      </header>

      <div className={`container ${styles.sections}`}>
        {cause.sections.map((section, index) => {
          const reversed = index % 2 === 1
          return (
            <section
              key={section.title}
              className={`${styles.block} ${reversed ? styles.reversed : ''}`}
            >
              {section.imageUrl ? (
                <figure className={styles.media}>
                  <img src={section.imageUrl} alt={section.imageAlt ?? ''} />
                </figure>
              ) : null}
              <div className={styles.copy}>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
                {section.bullets ? (
                  <ul>
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </section>
          )
        })}

        <aside className={styles.ctaBand}>
          <h2>Ready to raise for {cause.label.toLowerCase()}?</h2>
          <p>
            Create a {APP_NAME} campaign with a clear goal, honest story, and
            updates donors can trust.
          </p>
          <div className={styles.heroActions}>
            <Link to="/campaigns/new" className="btn btn-primary">
              Start a fundraiser
            </Link>
            <Link to="/help" className="btn btn-ghost">
              Read the Help Center
            </Link>
          </div>
        </aside>
      </div>
    </article>
  )
}
