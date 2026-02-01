/* import clientPromise from "@/lib/connnectDB";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("caroto_repair_dubai"); // আপনার ডাটাবেস নাম

  if (req.method === "GET") {
    const users = await db.collection("traffic").find({}).toArray();
    res.json(users);
  } else if (req.method === "POST") {
    const user = req.body;
    const result = await db.collection("users").insertOne(user);
    res.json(result);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
 */
