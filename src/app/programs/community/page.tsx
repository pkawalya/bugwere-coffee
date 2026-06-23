import { getProgramBySlug } from "@/lib/data";
import { notFound } from "next/navigation";
import ProgramClient from "@/components/ProgramClient";

export const revalidate = 60;

export default async function CommunityPage() {
  const program = await getProgramBySlug("community");
  if (!program) notFound();
  return <ProgramClient program={program} />;
}
