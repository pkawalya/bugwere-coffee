import bcrypt from "bcryptjs";
import { turso } from "@/lib/turso";
import { cookies } from "next/headers";

const COOKIE_NAME = "bcc_admin_token";

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

export async function comparePassword(
  password: string,
  hash: string
): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export async function verifyAdmin(
  request: Request
): Promise<{ id: string; email: string; name: string; role: string } | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;

  if (!token) return null;

  try {
    // Token format: adminId:timestamp:hmac
    const parts = token.split(":");
    if (parts.length !== 3) return null;

    const [adminId, timestamp, hmac] = parts;
    const secret = process.env.ADMIN_SECRET || "fallback-secret";

    // Verify HMAC
    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
      "raw",
      encoder.encode(secret),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["verify"]
    );

    const data = encoder.encode(`${adminId}:${timestamp}`);
    const sigBuffer = Buffer.from(hmac, "hex");
    const valid = await crypto.subtle.verify("HMAC", key, sigBuffer, data);

    if (!valid) return null;

    // Check if token is not older than 24 hours
    const tokenTime = parseInt(timestamp, 10);
    const now = Date.now();
    if (now - tokenTime > 24 * 60 * 60 * 1000) return null;

    // Fetch admin user
    const result = await turso.execute({
      sql: "SELECT id, email, name, role FROM admin_users WHERE id = ?",
      args: [adminId],
    });

    if (result.rows.length === 0) return null;

    const row = result.rows[0];
    return {
      id: row.id as string,
      email: row.email as string,
      name: row.name as string,
      role: row.role as string,
    };
  } catch {
    return null;
  }
}

export async function createAdminToken(adminId: string): Promise<string> {
  const timestamp = Date.now().toString();
  const secret = process.env.ADMIN_SECRET || "fallback-secret";

  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const data = encoder.encode(`${adminId}:${timestamp}`);
  const signature = await crypto.subtle.sign("HMAC", key, data);
  const hmac = Buffer.from(signature).toString("hex");

  return `${adminId}:${timestamp}:${hmac}`;
}
