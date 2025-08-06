// import mongoose from "mongoose";

// const urlSchema = new mongoose.Schema({
//   shortCode: String,
//   longUrl: String
// });

// // ✅ Correct way to register model
// export const Url = mongoose.model("shortURL", urlSchema);
// models/Url.js
import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  longUrl: String,
  shortUrl: String,
  urlCode: String,
  date: {
    type: String,
    default: Date.now,
  },
});

export default mongoose.model("Url", urlSchema);
