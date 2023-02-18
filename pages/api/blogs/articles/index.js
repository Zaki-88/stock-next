import {connect, model, models, Schema} from "mongoose"
const connectionString = 'mongodb+srv://user1:zz00818168@cluster0.3j6uypm.mongodb.net/test'


export default async function handler(req, res) {
    await connect(connectionString);
    const docs = await Article.find()
    console.log(docs)

    res.status(200).json(docs)
  }
  


  const articleSchema = new Schema({
    title: String,
    content: String,
  });

  const Article = models?.Article || model('article', articleSchema);