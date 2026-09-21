import InfoPage from '@/components/info-page'
export const metadata = { title: 'Legal Disclaimer | e-Marriages.com', description: 'Important limitations applying to information on e-Marriages.com.', alternates: { canonical: 'https://e-marriages.com/legal-disclaimer' } }
export default function DisclaimerPage(){return <InfoPage eyebrow="Important information" title="Legal Disclaimer" intro="Marriage, registration, immigration and document-recognition rules are jurisdiction-specific and fact-sensitive." sections={[
  ['Not legal advice', 'Content is general educational information. It should not be relied upon as a final opinion on the validity, recognition or immigration effect of a marriage.'],
  ['No universal online-marriage rule', 'The words online, remote, proxy, video or virtual do not identify one legal procedure. The place of celebration, authorised process and later jurisdiction of use must be examined.'],
  ['Immigration decisions', 'Only the relevant immigration authority can decide an application. A marriage certificate does not guarantee immigration approval or satisfy every relationship requirement.'],
  ['Changing requirements', 'Government procedures, forms, fees, treaty arrangements and local practices may change. Current requirements should be verified before action is taken.'],
  ['Case-specific engagement', 'Professional responsibility and confidentiality beyond ordinary website handling arise only after an appropriate engagement is expressly accepted.']
]} />}
