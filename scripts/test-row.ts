import { createClient } from "@libsql/client";
import * as dotenv from "dotenv";
dotenv.config({ path: "/home/z/my-project/.env" });

const turso = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

async function test() {
  const r = await turso.execute("SELECT * FROM impact_stats WHERE active = 1 LIMIT 2");
  const row = r.rows[0];
  console.log("Type of row:", typeof row);
  console.log("Constructor:", row?.constructor?.name);
  console.log("Row keys:", Object.keys(row || {}));
  console.log("Stringified:", JSON.stringify(row));
  console.log("Is plain?", row?.constructor?.name === "Object");
  
  // Test the serialize approach
  const serialized = JSON.parse(JSON.stringify(r.rows));
  console.log("Serialized type:", typeof serialized[0]);
  console.log("Serialized constructor:", serialized[0]?.constructor?.name);
  console.log("Serialized:", JSON.stringify(serialized[0]));
}

test().catch(console.error);
