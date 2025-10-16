const express = require("express");
const router = express.Router();
const Report = require("../models/report");

router.post("/", async (req, res) => {
  try {
    const { ngoName, month, peopleHelped, eventsConducted, fundsUtilized } = req.body;

    // Prevent duplicate for same NGO/month
    const exists = await Report.findOne({ ngoName, month });
    if (exists) {
      return res.status(400).json({ error: "Report already submitted for this NGO/month" });
    }

    const report = new Report({ ngoName, month, peopleHelped, eventsConducted, fundsUtilized });
    await report.save();

    res.json({ message: "Report submitted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error submitting report" });
  }
});

module.exports = router;
