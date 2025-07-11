import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { password } = await req.json();
  // Use environment variable for the admin password
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
  if (!ADMIN_PASSWORD) {
    return NextResponse.json(
      { success: false, error: "ADMIN_PASSWORD not set in environment." },
      { status: 500 }
    );
  }
  if (password === ADMIN_PASSWORD) {
    // For demo: return success (in real app, set a secure cookie or JWT)
    return NextResponse.json({ success: true });
  }
  return NextResponse.json({ success: false }, { status: 401 });
}
