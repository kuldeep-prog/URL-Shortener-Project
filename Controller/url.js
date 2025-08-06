// ✅ Correct (uppercase 'M' to match folder name)
import  Url from "../models/Url.js";

import shortid from "shortid";

export const shortUrl = async (req, res) => {
  const longUrl = req.body.longUrl;
  const shortCode = shortid.generate();

  const shortURL = `http://localhost:1000/${shortCode}`;

  const newUrl = new Url({
    longUrl: longUrl,
    shortUrl: shortURL,
    urlCode: shortCode,
  });

  await newUrl.save();
  console.log("short saved = ", newUrl);

  res.render("index.ejs", { shortUrl: shortURL });
};

export const getOriginalUrl = async (req, res) => {
  const shortCode = req.params.shortCode;

  const OriginalUrl = await Url.findOne({ urlCode: shortCode });

  if (OriginalUrl) {
    res.redirect(OriginalUrl.longUrl);
  } else {
    res.json({ message: "Invalid shortcode" });
  }
};
