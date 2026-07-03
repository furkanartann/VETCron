import LegalLayout from '../components/LegalLayout'

const LAST_UPDATED = 'July 4, 2026'

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated={LAST_UPDATED}>
      <section>
        <h2>1. Introduction</h2>
        <p>
          VETCron (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to
          protecting personal data. This Privacy Policy explains how we collect, use, store, and
          protect information when you visit our website, join our waitlist, or use our veterinary
          clinic management platform (the &quot;Service&quot;).
        </p>
        <p>
          By using our website or Service, you acknowledge that you have read and understood this
          Privacy Policy.
        </p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <h3>2.1 Information you provide directly</h3>
        <p>We may collect information that you voluntarily provide, including:</p>
        <ul>
          <li>Clinic name, contact name, and work email address (waitlist and early access forms)</li>
          <li>Account registration details when the Service becomes available</li>
          <li>Communications you send to us (support requests, feedback, inquiries)</li>
          <li>Clinic, staff, and patient-related data entered into the Service by authorized users</li>
        </ul>

        <h3>2.2 Information collected automatically</h3>
        <p>When you visit our website, we may automatically collect:</p>
        <ul>
          <li>Device and browser type, operating system, and language settings</li>
          <li>IP address and approximate location (country/region level)</li>
          <li>Pages visited, referral source, and interaction data</li>
          <li>Date and time of access</li>
        </ul>

        <h3>2.3 Clinical and veterinary data</h3>
        <p>
          If you use VETCron as a clinic, the Service may process patient records, appointment
          information, medical notes, and related data on your behalf. You remain the controller of
          this data; VETCron processes it only to provide the Service according to your instructions
          and our agreement with you.
        </p>
      </section>

      <section>
        <h2>3. How We Use Your Information</h2>
        <p>We use collected information to:</p>
        <ul>
          <li>Provide, operate, and improve the VETCron platform</li>
          <li>Manage waitlist registrations and early access communications</li>
          <li>Respond to inquiries and provide customer support</li>
          <li>Send product updates, onboarding information, and service-related notices</li>
          <li>Monitor website performance, security, and usage trends</li>
          <li>Comply with legal obligations and enforce our Terms of Service</li>
        </ul>
        <p>
          We do not sell your personal data to third parties.
        </p>
      </section>

      <section>
        <h2>4. Legal Basis for Processing</h2>
        <p>Where applicable data protection laws require a legal basis, we rely on:</p>
        <ul>
          <li><strong>Contract:</strong> to provide the Service you request or register for</li>
          <li><strong>Consent:</strong> for waitlist sign-ups, marketing communications, and optional features</li>
          <li><strong>Legitimate interests:</strong> to improve our platform, ensure security, and prevent abuse</li>
          <li><strong>Legal obligation:</strong> where we must retain or disclose data by law</li>
        </ul>
      </section>

      <section>
        <h2>5. AI Features and Clinical Data</h2>
        <p>
          VETCron includes AI-assisted tools designed to support clinical workflows. AI-generated
          suggestions are provided for informational purposes only and do not replace professional
          veterinary judgment.
        </p>
        <p>
          When AI features are used, relevant input data (such as symptoms, species, and medical
          history) may be processed to generate outputs. We implement safeguards to protect this data
          and limit processing to what is necessary to deliver the feature. You are responsible for
          ensuring that use of AI features complies with applicable professional and regulatory
          requirements in your jurisdiction.
        </p>
      </section>

      <section>
        <h2>6. Data Sharing and Disclosure</h2>
        <p>We may share information only in the following circumstances:</p>
        <ul>
          <li>
            <strong>Service providers:</strong> trusted vendors who assist with hosting, analytics,
            email delivery, and infrastructure (bound by confidentiality and data protection obligations)
          </li>
          <li>
            <strong>Legal requirements:</strong> when required by law, court order, or governmental authority
          </li>
          <li>
            <strong>Business transfers:</strong> in connection with a merger, acquisition, or sale of assets,
            subject to continued protection of your data
          </li>
          <li>
            <strong>With your consent:</strong> when you explicitly authorize sharing
          </li>
        </ul>
      </section>

      <section>
        <h2>7. Data Retention</h2>
        <p>
          We retain personal data only for as long as necessary to fulfill the purposes described in
          this policy, unless a longer retention period is required by law.
        </p>
        <ul>
          <li>Waitlist data is retained until you unsubscribe or request deletion</li>
          <li>Account and clinic data is retained for the duration of your subscription and as needed thereafter</li>
          <li>Website analytics data may be retained in aggregated or anonymized form</li>
        </ul>
      </section>

      <section>
        <h2>8. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect personal data,
          including encryption in transit, access controls, and regular security reviews. However, no
          method of transmission or storage is completely secure, and we cannot guarantee absolute
          security.
        </p>
      </section>

      <section>
        <h2>9. Your Rights</h2>
        <p>
          Depending on your location, you may have the right to:
        </p>
        <ul>
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to or restrict certain processing</li>
          <li>Withdraw consent where processing is consent-based</li>
          <li>Request a portable copy of your data</li>
          <li>Lodge a complaint with a data protection authority</li>
        </ul>
        <p>
          To exercise these rights, contact us at{' '}
          <a href="mailto:hello@vetcron.com">hello@vetcron.com</a>. We will respond within a
          reasonable timeframe as required by applicable law.
        </p>
      </section>

      <section>
        <h2>10. Cookies and Similar Technologies</h2>
        <p>
          Our website may use cookies and similar technologies to maintain session state, remember
          preferences, and analyze traffic. You can control cookies through your browser settings.
          Disabling cookies may affect certain website functionality.
        </p>
      </section>

      <section>
        <h2>11. International Data Transfers</h2>
        <p>
          Your information may be processed in countries other than your own. Where required, we
          implement appropriate safeguards — such as standard contractual clauses — to ensure your
          data receives an adequate level of protection.
        </p>
      </section>

      <section>
        <h2>12. Children&apos;s Privacy</h2>
        <p>
          VETCron is intended for use by veterinary clinics and professionals. Our website and
          Service are not directed at individuals under 18 years of age, and we do not knowingly
          collect personal data from children.
        </p>
      </section>

      <section>
        <h2>13. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When we make material changes, we
          will update the &quot;Last updated&quot; date at the top of this page and, where appropriate,
          notify you by email or through the Service. Continued use after changes constitutes
          acceptance of the updated policy.
        </p>
      </section>

      <section>
        <h2>14. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or our data practices, please contact us:
        </p>
        <p>
          <strong>VETCron</strong><br />
          Email: <a href="mailto:hello@vetcron.com">hello@vetcron.com</a>
        </p>
      </section>
    </LegalLayout>
  )
}
