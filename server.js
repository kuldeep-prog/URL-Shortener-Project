import express from 'express'
import mongoose  from 'mongoose';
import {shortUrl, getOriginalUrl} from "./Controller/url.js"

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));



mongoose
  .connect(
    "mongodb+srv://codesnippet02:nq0sdJL2Jc3QqZba@cluster0.zmf40.mongodb.net/",
    {
      dbName: "NodeJS_Mastery_Kuldeep",
    }
  )
  .then(() => console.log("MongoDb Connected..!"))
  .catch((err) => console.log(err));

// rendering the ejs file

  app.get("/",(req, res) =>{
    res.render("index.ejs", {shortUrl :null})

  })

// shorting url logic

  app.post('/short',shortUrl)


  app.get('/:shortCode', getOriginalUrl);

const port = 1000;
app.listen(port, () => console.log(`Server is running on port ${port}`));



