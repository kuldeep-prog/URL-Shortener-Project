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

