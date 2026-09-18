import { MongoClient, Db } from 'mongodb';

// Single connection string that INCLUDES the database name, e.g.
// mongodb+srv://user:pass@host/mayderc-portfolio?retryWrites=true&w=majority
const uri = process.env.MONGODB_URI;

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

/** Host only, with credentials stripped, so it's safe to log. */
function safeTarget(connectionString: string) {
  try {
    const withoutScheme = connectionString.replace(/^mongodb(\+srv)?:\/\//, '');
    const afterCredentials = withoutScheme.includes('@')
      ? withoutScheme.slice(withoutScheme.lastIndexOf('@') + 1)
      : withoutScheme;
    return afterCredentials.split('/')[0].split('?')[0] || 'unknown';
  } catch {
    return 'unknown';
  }
}

export async function connectToDatabase() {
  if (!uri) {
    console.error('[mongodb] MONGODB_URI is not set');
    throw new Error(
      'Missing MONGODB_URI. Set it to a full connection string including the ' +
        'database name, e.g. mongodb+srv://user:pass@host/mayderc-portfolio'
    );
  }

  if (cachedClient && cachedDb) {
    if (process.env.NODE_ENV !== 'production') {
      console.log(`[mongodb] reusing cached connection -> "${cachedDb.databaseName}"`);
    }
    return { client: cachedClient, db: cachedDb };
  }

  const target = safeTarget(uri);
  console.log(`[mongodb] connecting to ${target}...`);

  const client = new MongoClient(uri, {
    serverSelectionTimeoutMS: 3000,
    connectTimeoutMS: 3000,
  });

  try {
    await client.connect();

    // Uses the database name from the connection string, no separate var needed.
    const db = client.db();
    await db.command({ ping: 1 });

    cachedClient = client;
    cachedDb = db;

    console.log(
      `[mongodb] connected OK -> database "${db.databaseName}" @ ${target}`
    );

    return { client, db };
  } catch (error) {
    console.error(
      `[mongodb] connection FAILED (${target}):`,
      error instanceof Error ? error.message : error
    );
    await client.close().catch(() => {});
    throw error;
  }
}

export async function closeDatabaseConnection() {
  if (cachedClient) {
    await cachedClient.close();
    cachedClient = null;
    cachedDb = null;
  }
}
