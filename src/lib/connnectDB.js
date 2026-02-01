/* // lib/mongodb.js
import { MongoClient } from "mongodb";

const uri = process.env.NEXT_PUBLIC_MONGODB_URI; // MongoDB connection string
const options = {};

let client;
let clientPromise;

if (!process.env.NEXT_PUBLIC_MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  // Dev mode: Hot reload এর সময় নতুন client তৈরি না হয়
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // Production mode
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
 */
