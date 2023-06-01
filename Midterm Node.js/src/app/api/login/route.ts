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
  const res: { username: string; password: string } = await request.json();

  const { username, password } = res;

  if (!username || !password) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  const database = client.db('midterm');
  const users = database.collection('users');

  const user = await users.findOne({ username });

  if (!user) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  return NextResponse.json({ message: 'Login successfully' });
}
