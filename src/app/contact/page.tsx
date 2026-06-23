import { getSiteSettings } from "@/lib/data";
import ContactClient from "@/components/ContactClient";

export const revalidate = 60;

export default async function ContactPage() {
  const settings = await getSiteSettings();
  return <ContactClient settings={settings} />;
}
