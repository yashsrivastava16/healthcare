import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "appointments.json");

// Helper to read appointments
async function readAppointments() {
  try {
    const data = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// Helper to write appointments
async function writeAppointments(appointments: any[]) {
  await fs.writeFile(DATA_FILE, JSON.stringify(appointments, null, 2), "utf-8");
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const appointments = await readAppointments();
  appointments.push(body);
  await writeAppointments(appointments);
  return NextResponse.json({ success: true });
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const date = searchParams.get("date");
  const appointments = await readAppointments();
  let filtered = appointments;
  if (date) {
    filtered = appointments.filter(
      (a: any) => a.date && a.date.startsWith(date)
    );
  }
  return NextResponse.json(filtered);
}
