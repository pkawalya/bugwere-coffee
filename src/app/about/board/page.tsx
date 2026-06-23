import { getBoardMembers } from "@/lib/data";
import BoardClient from "@/components/BoardClient";

export const revalidate = 60;

export default async function BoardPage() {
  const board = await getBoardMembers();
  return <BoardClient board={board} />;
}
