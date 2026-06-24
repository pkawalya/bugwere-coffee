import { createClient } from "@libsql/client";
import * as dotenv from "dotenv";

dotenv.config({ path: "/home/z/my-project/.env" });

const turso = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

async function updateCounts() {
  console.log("Updating impact stats by 15%...");

  // Update impact_stats
  await turso.execute({
    sql: "UPDATE impact_stats SET value = ? WHERE label = ?",
    args: ["5750", "Coffee Homes"],
  });
  await turso.execute({
    sql: "UPDATE impact_stats SET value = ? WHERE label = ?",
    args: ["5750", "Coffee Seedling Homes"],
  });
  await turso.execute({
    sql: "UPDATE impact_stats SET value = ? WHERE label = ?",
    args: ["4255", "Cocoa Homes"],
  });
  await turso.execute({
    sql: "UPDATE impact_stats SET value = ? WHERE label = ?",
    args: ["4255", "Cocoa Seedling Homes"],
  });
  await turso.execute({
    sql: "UPDATE impact_stats SET value = ? WHERE label = ?",
    args: ["8050", "Fertilizer Homes"],
  });
  await turso.execute({
    sql: "UPDATE impact_stats SET value = ? WHERE label = ?",
    args: ["8050", "Fertilizer Recipients"],
  });
  await turso.execute({
    sql: "UPDATE impact_stats SET value = ? WHERE label = ?",
    args: ["17250", "Lives Impacted"],
  });

  // Update hero slides
  await turso.execute({
    sql: "UPDATE hero_slides SET title = ? WHERE subtitle = ?",
    args: ["Over 5,750 Homes Supplied With Coffee Seedlings", "Seedling Program"],
  });
  await turso.execute({
    sql: "UPDATE hero_slides SET title = ? WHERE subtitle = ?",
    args: ["8,050+ Homes Supplied With Fertilizers", "Agricultural Support"],
  });

  // Update programs
  await turso.execute({
    sql: "UPDATE programs SET key_facts = ? WHERE slug = ?",
    args: [JSON.stringify([
      { label: "Homes Reached", value: "5,750+", icon: "HeartHandshake" },
      { label: "Seedling Varieties", value: "3 Premium", icon: "Sprout" },
      { label: "Field Officers", value: "45+", icon: "BookOpen" },
      { label: "Yield Increase", value: "+35%", icon: "Sun" },
    ]), "coffee"],
  });
  await turso.execute({
    sql: "UPDATE programs SET key_facts = ? WHERE slug = ?",
    args: [JSON.stringify([
      { label: "Homes Reached", value: "4,255+", icon: "HeartHandshake" },
      { label: "Growth Rate", value: "+65%", icon: "TrendingUp" },
      { label: "Climate Suitability", value: "Excellent", icon: "Sprout" },
      { label: "Market Outlook", value: "Strong Demand", icon: "ShieldCheck" },
    ]), "cocoa"],
  });

  // Verify
  const stats = await turso.execute("SELECT label, value FROM impact_stats");
  console.log("\nUpdated impact stats:");
  for (const row of stats.rows) {
    console.log(`  ${row.label}: ${row.value}`);
  }

  console.log("\n✅ Counts updated by 15%!");
}

updateCounts().catch(console.error);
