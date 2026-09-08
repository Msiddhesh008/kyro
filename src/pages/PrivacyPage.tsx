import { APP_NAME } from '../constants'
import { TrustPageLayout } from '../components/trust/TrustPageLayout'

export function PrivacyPage() {
  return (
    <TrustPageLayout
      title="Privacy Policy"
      lead={`How ${APP_NAME} collects and uses information. This preview summary is for product demonstration and is not a filed legal policy.`}
    >
      <section>
        <h2>Information we collect</h2>
        <p>
          Account details (name, email, phone), campaign content you publish,
          donation amounts and donor contact when provided, and basic usage data
          needed to run the service.
        </p>
      </section>

      <section>
        <h2>How we use it</h2>
        <ul>
          <li>Operate campaigns, donations, and withdrawals</li>
          <li>Communicate updates, receipts, and support replies</li>
          <li>Improve trust and safety reviews</li>
          <li>Meet legal and compliance obligations</li>
        </ul>
      </section>

      <section id="cookies">
        <h2>Use of cookies</h2>
        <p>
          We use essential cookies and similar storage to keep you signed in and
          remember basic preferences. Analytics cookies, if enabled, help us
          understand how pages perform. You can control cookies through your
          browser settings; disabling essential cookies may limit site features.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Privacy questions: hello@kyro.in. We aim to respond within a reasonable
          time for access or correction requests related to your account data.
        </p>
      </section>
    </TrustPageLayout>
  )
}
