import { MongoClient } from "mongodb";

// Replace the placeholder with your Atlas connection string
const uri = process.env.MONGO_URI as string;
const options = {};

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export const instanceDb = async () => {
  const db = (await clientPromise).db(
    process.env.NODE_ENV === "production" ? "main" : "dev"
  );
  const collection = db.collection("avatars");

  return collection;
};

export { clientPromise };
