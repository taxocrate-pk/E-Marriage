import InfoPage from '@/components/info-page'
export const metadata = { title: 'Privacy Policy | e-Marriages.com', description: 'Privacy policy for e-Marriages.com.', alternates: { canonical: 'https://e-marriages.com/privacy-policy' } }
export default function PrivacyPage(){return <InfoPage eyebrow="Website policy" title="Privacy Policy" intro="This policy explains the categories of information that may be collected when you visit or contact e-Marriages.com and how that information may be handled." sections={[
  ['Information you provide', 'We may receive your name, contact details, countries involved, nationality, marital-status information and the description or documents you choose to provide in an enquiry.'],
  ['How information may be used', ['To respond to an enquiry and assess whether assistance may be available.','To communicate about requested services.','To maintain security, prevent misuse and meet legal obligations.','To improve website information and user experience using aggregated data.']],
  ['Sensitive information', 'Do not send original identity documents, financial information or highly sensitive records through an unsecured channel unless specifically requested through an approved method.'],
  ['Sharing and international handling', 'Information may be shared with relevant professionals or service providers only where reasonably required, permitted and consistent with the purpose for which it was supplied. Cross-border enquiries may involve international data handling.'],
  ['Retention and rights', 'Information is retained only as reasonably necessary for the enquiry, service, legal obligations and record-keeping. Applicable rights depend on your location and governing privacy law.'],
  ['Contact', 'Privacy enquiries may be sent to hello@e-marriages.com.']
]} />}
