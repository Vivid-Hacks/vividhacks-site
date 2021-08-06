
export default async (req, res) => {
  //
  const fetch = require("node-fetch")
  var queryParams = {
    waitlist: "i",
    membercount: "i"
  }
  if (!queryParams[req.query.query]) return res.send("Not a valid endpoint!")
  const fs = require("file-system");
  let secrets = process.env.secrets;
  if (!secrets) {
    let temp = await fetch("http://localhost:3000/secrets.json");
    temp = await temp.json();
    secrets = JSON.stringify(temp);
  };
  secrets = JSON.parse(secrets);
  const uri = secrets.mongodb;
  const { MongoClient } = require('mongodb')
  const mongoclient = new MongoClient(uri);
  await mongoclient.connect();
  const db = mongoclient.db("vivid-hacks");
  
  if (req.query.query === "waitlist") {
    if (!req.body) return res.send("STAP IT PLESSSSSS");
    if (!req.body.email || !req.body.name || !req.body.level) return res.send("STAP IT PLESSSSSS");
  
    let user = await db.collection("main").findOne({ email: req.body.email });
    if (user) {
      await db.collection("main").updateOne({ email: req.body.email }, {
        $set: {
          name: req.body.name,
          level: req.body.level
        }
      })
      res.send("Your info has been updated!")
      return await mongoclient.close();
    }
    await db.collection("main").insertOne({
      email: req.body.email,
      name: req.body.name,
      level: req.body.level
    })
    await mongoclient.close();
    return res.send(`Nice! You are on the waitlist now! As a review, this is the info we got: EMAIL: ${req.body.email}, NAME: ${req.body.name}, LEVEL: ${req.body.level}`);
  }else if (req.query.query === "membercount"){
    let amount = await db.collection("main").count();
    await mongoclient.close();
    return res.send(( amount).toString())
  }
}
