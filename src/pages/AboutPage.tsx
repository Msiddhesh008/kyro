import { APP_NAME } from '../constants'
import { TrustPageLayout } from '../components/trust/TrustPageLayout'

export function AboutPage() {
  return (
    <TrustPageLayout
      title={`About ${APP_NAME}`}
      lead={`${APP_NAME} is a crowdfunding platform based out of India. We believe in “Healthcare for All” and help families and organisations raise funds when it matters most.`}
    >
      <section>
        <h2>Our mission</h2>
        <p>
          Medical bills, school fees, and sudden emergencies should not leave
          people alone. {APP_NAME} gives organisers a clear way to tell their
          story, share a campaign link, and receive support from people who care—
          on web and mobile.
        </p>
      </section>

      <section>
        <h2>Who we serve</h2>
        <ul>
          <li>Families raising funds for hospital treatment and recovery</li>
          <li>Communities responding to floods, cyclones, and local crises</li>
          <li>Education and animal-welfare organisers across India</li>
          <li>Verified NGOs and trusts applying through our nonprofit flow</li>
        </ul>
      </section>

      <section id="news">
        <h2>Team &amp; presence</h2>
        <p>
          Our product, trust, and support teams work with organisers to keep
          campaigns clear and donors informed. We are building for India first—
          INR goals, UPI-friendly giving, and updates that work on phone and
          desktop.
        </p>
        <p>
          Press and partnership enquiries: hello@kyro.in. Story highlights and
          milestones will appear here as {APP_NAME} grows.
        </p>
      </section>
    </TrustPageLayout>
  )
}
