
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
  const mongoclient = new MongoClient(uri, {poolSize: 10, bufferMaxEntries: 0, useNewUrlParser: true,useUnifiedTopology: true});
  await mongoclient.connect();
  // do things
  await mongoclient.close();
  return res.send(`Success! EMAIL: ${req.body.email}, NAME: ${req.body.name}, LEVEL: ${req.body.level}`);
}
