import { getTeamMembers } from "@/lib/data";
import TeamClient from "@/components/TeamClient";

export const revalidate = 60;

export default async function TeamPage() {
  const team = await getTeamMembers();
  return <TeamClient team={team} />;
}
