
export default async (req, res) => {
    //
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
    let amount = db.collection("main").count();
    await mongoclient.close();
    return res.send((await amount).toString())
  }
  