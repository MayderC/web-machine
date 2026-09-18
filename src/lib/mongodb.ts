import { MongoClient, Db } from 'mongodb';

// Single connection string that INCLUDES the database name, e.g.
// mongodb+srv://user:pass@host/mayderc-portfolio?retryWrites=true&w=majority
const uri = process.env.MONGODB_URI;

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase() {
  if (!uri) {
    throw new Error(
      'Missing MONGODB_URI. Set it to a full connection string including the ' +
        'database name, e.g. mongodb+srv://user:pass@host/mayderc-portfolio'
    );
  }

  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(uri, {
    serverSelectionTimeoutMS: 3000,
    connectTimeoutMS: 3000,
  });
  await client.connect();

  // Uses the database name from the connection string, no separate var needed.
  const db = client.db();

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

export async function closeDatabaseConnection() {
  if (cachedClient) {
    await cachedClient.close();
    cachedClient = null;
    cachedDb = null;
  }
}
