import { getProgramBySlug } from "@/lib/data";
import { notFound } from "next/navigation";
import ProgramClient from "@/components/ProgramClient";

export const revalidate = 60;

export default async function AgronomyPage() {
  const program = await getProgramBySlug("agronomy");
  if (!program) notFound();
  return <ProgramClient program={program} />;
}
