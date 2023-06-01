import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gshqzhl.mongodb.net`;

export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export default async function Posts({ params }: any) {
  const db = client.db('midterm');
  const posts = db.collection('posts');

  const foundResult: any = await posts.findOne({ _id: params.id });

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h2 className="text-xl font-bold text-white mb-2">{foundResult.title}</h2>
      <p className="text-gray-300 text-sm mb-4">{foundResult.content}</p>
      <div className="flex items-center text-gray-300 text-sm">
        <span className="mr-2"> {foundResult.tag}</span>
        <span className="mr-4"> {foundResult.category}</span>
      </div>
    </div>
  );
}
