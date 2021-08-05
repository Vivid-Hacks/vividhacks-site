
export default async (req, res) => {
  //
  if (!req.body) return res.send("STAP IT PLESSSSSS");
  if (!req.body.email || !req.body.name || !req.body.level) return res.send("STAP IT PLESSSSSS");
  const fs = require("file-system");
  let secrets = process.env.secrets;
  if (!secrets){
    secrets = fs.readFileSync("../../secrets.json");
  };
  secrets = JSON.parse(secrets);
  const uri = secrets.mongodb;
  const {MongoClient} = require('mongodb')
  const mongoclient = new MongoClient(uri);
  await mongoclient.connect();
  const db = mongoclient.db("vivid-hacks");
  let user = await db.collection("main").findOne({email: req.body.email});
  if (user){
    await db.collection("main").updateOne({email: req.body.email}, {$set: {
      name: req.body.name,
      level: req.body.level
    }})
    return await mongoclient.close();
  }
  await db.collection("main").insertOne({
    email: req.body.email,
    name: req.body.name,
    level: req.body.level
  })
  await mongoclient.close();
  return res.send(`Success! EMAIL: ${req.body.email}, NAME: ${req.body.name}, LEVEL: ${req.body.level}`);
}
