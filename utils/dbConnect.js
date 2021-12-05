import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://manny:rbH8dW3SGULfZhh2@cluster0.5kjxi.mongodb.net/vividhacksDB?retryWrites=true&w=majority";

const opts = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export default async function connectToDb() {
  const client = await MongoClient.connect(uri, opts);
  const db = client.db("vividhacksDB");
  return { db };
}
