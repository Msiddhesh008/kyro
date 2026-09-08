import { APP_NAME } from '../constants'
import { TrustPageLayout } from '../components/trust/TrustPageLayout'

export function TrustSafetyPage() {
  return (
    <TrustPageLayout
      title="Trust & Safety"
      lead={`How ${APP_NAME} reviews campaigns, handles funds responsibly, and keeps donors and organisers safer.`}
    >
      <section id="genuine">
        <h2>Is {APP_NAME} genuine?</h2>
        <p>
          {APP_NAME} is a crowdfunding intermediary. We provide tools to raise
          and receive contributions for stated needs. We are not a bank, insurer,
          or investment product. Contact details and policies are published in
          the site footer for transparency.
        </p>
      </section>

      <section id="campaigns">
        <h2>Are campaigns genuine?</h2>
        <p>
          Organisers submit campaign details and supporting context. Higher-risk
          medical and large-goal campaigns may be asked for hospital estimates,
          ID, or organisation documents. We encourage donors to read each story
          carefully and share only when they trust the organiser.
        </p>
        <ul>
          <li>Document review for medical and NGO fundraisers when required</li>
          <li>Invoice-based disbursal preferred for hospital treatments</li>
          <li>Clear progress updates expected from campaign owners</li>
        </ul>
      </section>

      <section>
        <h2>Fund handling</h2>
        <p>
          Contributions are tracked against campaign goals. Withdrawals go to
          verified bank accounts tied to the organiser. {APP_NAME} does not
          promise investment returns or financial benefits to donors.
        </p>
      </section>

      <section>
        <h2>Report a concern</h2>
        <p>
          If you spot misleading claims, misuse of funds, or unsafe content,
          email hello@kyro.in with the campaign link and details. Our trust team
          reviews reports and may pause campaigns while we investigate.
        </p>
      </section>
    </TrustPageLayout>
  )
}
