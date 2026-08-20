import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact Sales & Export Desk",
  description:
    "Get in touch with Eco Export sales team in Gujarat, India for agricultural export inquiries, RFQs, bulk orders, and port dispatch details.",
  openGraph: {
    title: "Contact Sales & Export Desk | ECO EXPORT",
    description:
      "Contact Eco Export for bulk B2B agricultural export orders, RFQs, and Mundra/Kandla port dispatch schedules.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}