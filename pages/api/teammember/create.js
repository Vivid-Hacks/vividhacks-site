import connectToDb from "../../../utils/dbConnect";

export default async function (req, res) {
  console.log(req.body);

  //const { db } = await connectToDb();
  //const data = await db.collection("team members").find().limit(2).toArray();
  const data = "data";

  res.status(200).json({ success: true, data: { data } });
}
