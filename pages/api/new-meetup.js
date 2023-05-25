import { MongoClient } from "mongodb";
const uri =
  "mongodb+srv://admin:k42tgJL5bR1pOp0w@cluster0.m12571f.mongodb.net/meetups?retryWrites=true&w=majority";

const client = new MongoClient(uri);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const db = client.db("meetups");

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}
