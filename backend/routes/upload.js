const express = require("express");
const router = express.Router();
const multer = require("multer");
const csv = require("csv-parser");
const fs = require("fs");
const Report = require("../models/report");

const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("file"), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });

  const results = [];
  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", async () => {
      let processed = 0;
      for (const row of results) {
        const { ngoName, month, peopleHelped, eventsConducted, fundsUtilized } = row;

        // Idempotency check
        const exists = await Report.findOne({ ngoName, month });
        if (!exists) {
          await new Report({
            ngoName,
            month,
            peopleHelped: Number(peopleHelped),
            eventsConducted: Number(eventsConducted),
            fundsUtilized: Number(fundsUtilized)
          }).save();
        }
        processed++;
      }
      fs.unlinkSync(req.file.path); // remove temp file
      res.json({ message: `Processed ${processed} reports` });
    });
});

module.exports = router;
