const express = require('express');
const Report = require('../models/report');

const router = express.Router();

// GET /api/dashboard?month=YYYY-MM
router.get('/', async (req, res) => {
  const month = req.query.month;
  if (!month || !/^\d{4}-\d{2}$/.test(month)) {
    return res.status(400).json({ error: 'month query param required in YYYY-MM' });
  }

  const reports = await Report.find({ month });

  const totalNGOs = new Set(reports.map(r => r.ngoId)).size;
  const totalPeople = reports.reduce((s, r) => s + (r.peopleHelped || 0), 0);
  const totalEvents = reports.reduce((s, r) => s + (r.events || 0), 0);
  const totalFunds = reports.reduce((s, r) => s + (r.funds || 0), 0);

  res.json({ totalNGOs, totalPeople, totalEvents, totalFunds, details: reports });
});

module.exports = router;
