import { MongoClient, ServerApiVersion } from 'mongodb';
import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gshqzhl.mongodb.net`;

export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function POST(request: NextRequest) {
  const res: {
    username: string;
    password: string;
    name: string;
    address: string;
  } = await request.json();
  const { name, address, username, password } = res;

  if (!name || !address || !username || !password) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  const db = client.db('midterm');
  const users = db.collection('users');

  const existingUser = await users.findOne({ username });

  if (existingUser) {
    return NextResponse.json(
      { error: 'Username already in use' },
      { status: 409 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    name,
    address,
    username,
    password: hashedPassword,
  };

  await users.insertOne(newUser);

  return NextResponse.json({ message: 'Registered successfully' });
}
