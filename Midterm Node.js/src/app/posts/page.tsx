import { MongoClient, ServerApiVersion, Sort } from 'mongodb';
import Link from 'next/link';

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gshqzhl.mongodb.net`;

export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export default async function Posts() {
  const db = client.db('midterm');
  const posts = db.collection('posts');

  // define an empty query document
  const query = {};
  // sort in descending (-1) order by length
  const sort: Sort = { length: -1 };
  const cursor = posts.find(query).sort(sort);
  const postsList: any = [];
  for await (const doc of cursor) {
    postsList.push(doc);
  }

  return (
    <div className="bg-gray-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold text-white mb-8">
          All Pots List
        </h1>
        <div className="grid gap-8">
          {postsList.map((post: any) => (
            <Link
              href={`${post.id}`}
              key={post.id}
              className="bg-gray-800 p-4 rounded-lg">
              <h2 className="text-xl font-bold text-white mb-2">
                {post.title}
              </h2>
              <p className="text-gray-300 text-sm mb-4">{post.content}</p>
              <div className="flex items-center text-gray-300 text-sm">
                <span className="mr-2"> {post.tag}</span>
                <span className="mr-4"> {post.category}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
