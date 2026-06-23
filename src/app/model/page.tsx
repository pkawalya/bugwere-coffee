import { getModelPillars } from "@/lib/data";
import ModelClient from "@/components/ModelClient";

export const revalidate = 60;

export default async function ModelPage() {
  const pillars = await getModelPillars();
  return <ModelClient pillars={pillars} />;
}
