import connectToDb from "../../../utils/dbConnect";

export default async function (req, res) {
  const { db } = await connectToDb();
  const data = await db.collection("team members").find().limit(2).toArray();

  res.status(200).json({ success: true, data: { data } });
}
