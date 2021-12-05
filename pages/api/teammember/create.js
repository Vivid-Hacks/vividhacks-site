import connectToDb from "../../../utils/dbConnect";

const createTeamMate = async (req, res) => {
  const { name, position, age, mediaUrl } = req.body;

  const { db } = await connectToDb();

  const collection = db.collection("team members");

  const newData = await collection.insertOne({
    name,
    position,
    age,
    mediaUrl,
  });

  res.status(201).json({ success: true, data: { newData } });
};

export default createTeamMate;
