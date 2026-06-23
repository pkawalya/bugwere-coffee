import { getImpactStories, getImpactStats } from "@/lib/data";
import ImpactClient from "@/components/ImpactClient";

export const revalidate = 60;

export default async function ImpactPage() {
  const [stories, impactStats] = await Promise.all([
    getImpactStories(),
    getImpactStats(),
  ]);

  return <ImpactClient stories={stories} impactStats={impactStats} />;
}
