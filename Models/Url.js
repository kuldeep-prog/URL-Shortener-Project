import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  shortCode: String,
  longUrl: String
});

// ✅ Correct way to register model
export const Url = mongoose.model("shortURL", urlSchema);
