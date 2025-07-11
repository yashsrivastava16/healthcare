import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = "drPortfolio";
const collectionName = "appointments";

async function getCollection() {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(dbName);
  return { collection: db.collection(collectionName), client };
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { collection, client } = await getCollection();
  await collection.insertOne(body);
  await client.close();
  return NextResponse.json({ success: true });
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const date = searchParams.get("date");
  const { collection, client } = await getCollection();
  let query = {};
  if (date) {
    query = { date: { $regex: `^${date}` } };
  }
  const appointments = await collection.find(query).toArray();
  await client.close();
  return NextResponse.json(appointments);
}
