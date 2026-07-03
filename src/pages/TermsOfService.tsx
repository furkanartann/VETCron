import LegalLayout from '../components/LegalLayout'
import { Link } from '../router'

const LAST_UPDATED = 'July 4, 2026'

export default function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated={LAST_UPDATED}>
      <section>
        <h2>1. Agreement to Terms</h2>
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your access to and use of the VETCron website,
          waitlist, early access program, and veterinary clinic management platform (collectively,
          the &quot;Service&quot;) operated by VETCron (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
        </p>
        <p>
          By accessing or using the Service, you agree to be bound by these Terms. If you do not
          agree, do not use the Service.
        </p>
      </section>

      <section>
        <h2>2. Description of Service</h2>
        <p>
          VETCron provides software tools for veterinary clinics, including patient management,
          appointment scheduling, billing, inventory tracking, and AI-assisted clinical decision
          support features. The Service is designed to help clinics operate more efficiently.
        </p>
        <p>
          VETCron is currently in active development. Features, availability, and pricing may change
          as we continue to build and improve the platform.
        </p>
      </section>

      <section>
        <h2>3. Early Access and Beta Use</h2>
        <p>
          If you join our waitlist or early access program, you acknowledge that:
        </p>
        <ul>
          <li>The Service may be incomplete, unstable, or subject to frequent changes</li>
          <li>Features may be added, modified, or removed without prior notice</li>
          <li>We may limit the number of early access participants</li>
          <li>Early access does not guarantee future availability or pricing</li>
          <li>You may be asked to provide feedback to help improve the product</li>
        </ul>
      </section>

      <section>
        <h2>4. Eligibility and Accounts</h2>
        <p>
          The Service is intended for veterinary clinics, licensed professionals, and authorized
          clinic staff. You must provide accurate registration information and keep your account
          credentials confidential.
        </p>
        <p>
          You are responsible for all activity that occurs under your account and for ensuring that
          anyone who accesses the Service through your account complies with these Terms.
        </p>
      </section>

      <section>
        <h2>5. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Service for any unlawful purpose or in violation of applicable regulations</li>
          <li>Upload false, misleading, or unauthorized patient or clinic data</li>
          <li>Attempt to gain unauthorized access to our systems or other users&apos; accounts</li>
          <li>Reverse engineer, decompile, or attempt to extract source code from the Service</li>
          <li>Interfere with or disrupt the integrity or performance of the Service</li>
          <li>Use the Service to transmit malware, spam, or harmful content</li>
          <li>Resell, sublicense, or redistribute the Service without our written permission</li>
        </ul>
      </section>

      <section>
        <h2>6. AI Features — Important Disclaimer</h2>
        <p>
          VETCron includes AI-assisted features that may suggest differential diagnoses, treatment
          options, or clinical documentation. These features are intended as decision support tools
          only.
        </p>
        <p>
          <strong>AI outputs are not a substitute for professional veterinary judgment.</strong> You
          are solely responsible for all clinical decisions, diagnoses, treatments, and patient care.
          Always verify AI suggestions against your professional expertise, current standards of care,
          and applicable laws and regulations.
        </p>
        <p>
          We do not guarantee the accuracy, completeness, or suitability of any AI-generated content.
          VETCron is not liable for clinical outcomes resulting from reliance on AI suggestions.
        </p>
      </section>

      <section>
        <h2>7. Your Data and Responsibilities</h2>
        <p>
          As a clinic using VETCron, you retain ownership of the data you enter into the Service,
          including patient records and medical information. You are responsible for:
        </p>
        <ul>
          <li>Obtaining necessary consents from pet owners and staff</li>
          <li>Ensuring data entered is accurate and lawfully collected</li>
          <li>Complying with applicable veterinary, healthcare, and data protection regulations</li>
          <li>Maintaining appropriate backup procedures where required by your jurisdiction</li>
        </ul>
        <p>
          Our handling of personal data is described in our{' '}
          <Link to="/privacy">Privacy Policy</Link>.
        </p>
      </section>

      <section>
        <h2>8. Intellectual Property</h2>
        <p>
          The Service, including its software, design, logos, documentation, and content, is owned
          by VETCron and protected by intellectual property laws. These Terms do not grant you any
          rights to our trademarks or brand assets except as needed to use the Service as intended.
        </p>
        <p>
          You may not copy, modify, distribute, or create derivative works based on the Service
          without our prior written consent.
        </p>
      </section>

      <section>
        <h2>9. Fees and Payment</h2>
        <p>
          Early access may be offered at no charge or at promotional pricing. When paid plans become
          available, pricing, billing terms, and cancellation policies will be communicated before
          you are charged. We reserve the right to change pricing for future subscription periods
          with reasonable notice.
        </p>
      </section>

      <section>
        <h2>10. Service Availability</h2>
        <p>
          We strive to maintain reliable access to the Service but do not guarantee uninterrupted
          or error-free operation. We may suspend or restrict access for maintenance, security,
          updates, or circumstances beyond our reasonable control.
        </p>
      </section>

      <section>
        <h2>11. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by applicable law, VETCron and its team shall not be
          liable for any indirect, incidental, special, consequential, or punitive damages,
          including loss of profits, data, or goodwill, arising from your use of the Service.
        </p>
        <p>
          Our total liability for any claim arising from these Terms or the Service shall not exceed
          the amount you paid us in the twelve (12) months preceding the claim, or one hundred (100)
          USD if no fees were paid.
        </p>
        <p>
          Some jurisdictions do not allow certain limitations of liability, so some of the above
          may not apply to you.
        </p>
      </section>

      <section>
        <h2>12. Disclaimer of Warranties</h2>
        <p>
          The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind,
          whether express or implied, including implied warranties of merchantability, fitness for a
          particular purpose, and non-infringement. We do not warrant that the Service will meet
          your specific requirements or that AI outputs will be error-free.
        </p>
      </section>

      <section>
        <h2>13. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless VETCron from any claims, damages, losses, or
          expenses (including reasonable legal fees) arising from your use of the Service, your
          violation of these Terms, or your violation of any third-party rights, including clinical
          or data protection obligations.
        </p>
      </section>

      <section>
        <h2>14. Termination</h2>
        <p>
          You may stop using the Service at any time. We may suspend or terminate your access if you
          violate these Terms, if required by law, or if we discontinue the Service. Upon termination,
          your right to use the Service ceases, though provisions that by nature should survive
          (including liability limitations and indemnification) will remain in effect.
        </p>
      </section>

      <section>
        <h2>15. Governing Law and Disputes</h2>
        <p>
          These Terms shall be governed by and construed in accordance with applicable laws, without
          regard to conflict of law principles. Any disputes arising from these Terms or the Service
          shall be resolved through good-faith negotiation first. If unresolved, disputes may be
          submitted to the competent courts or arbitration body in your jurisdiction, unless
          mandatory local law provides otherwise.
        </p>
      </section>

      <section>
        <h2>16. Changes to These Terms</h2>
        <p>
          We may revise these Terms at any time. Material changes will be indicated by updating the
          &quot;Last updated&quot; date. Continued use of the Service after changes constitutes acceptance.
          If you do not agree to revised Terms, you must stop using the Service.
        </p>
      </section>

      <section>
        <h2>17. Contact</h2>
        <p>
          For questions about these Terms, please contact us:
        </p>
        <p>
          <strong>VETCron</strong><br />
          Email: <a href="mailto:hello@vetcron.com">hello@vetcron.com</a>
        </p>
      </section>
    </LegalLayout>
  )
}
