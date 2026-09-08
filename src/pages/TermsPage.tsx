import { APP_NAME } from '../constants'
import { TrustPageLayout } from '../components/trust/TrustPageLayout'

export function TermsPage() {
  return (
    <TrustPageLayout
      title="Terms of Use"
      lead={`These terms describe how you may use ${APP_NAME}. This is demo product copy and is not formal legal advice.`}
    >
      <section>
        <h2>Using the platform</h2>
        <p>
          You agree to provide accurate information when creating an account or
          campaign, and to use {APP_NAME} only for lawful fundraising purposes.
          You must not post misleading medical claims or solicit funds for
          prohibited activities.
        </p>
      </section>

      <section>
        <h2>Donations and campaigns</h2>
        <p>
          Donors contribute voluntarily. {APP_NAME} does not guarantee that a
          campaign will meet its goal or that organisers will achieve a specific
          outcome. Organisers are responsible for updates and lawful use of
          funds.
        </p>
      </section>

      <section id="aml">
        <h2>AML Policy</h2>
        <p>
          {APP_NAME} takes reasonable steps to prevent misuse of the platform for
          money laundering or terrorist financing. We may request identity or
          bank verification, delay withdrawals, or suspend accounts when risk
          indicators appear. Suspicious activity may be escalated to authorities
          as required by applicable law.
        </p>
      </section>

      <section>
        <h2>Changes</h2>
        <p>
          We may update these terms as the product evolves. Continued use of the
          site after changes means you accept the revised terms.
        </p>
      </section>
    </TrustPageLayout>
  )
}
