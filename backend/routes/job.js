const express = require('express');
const Job = require('../models/job');
const router = express.Router();

router.get('/:id', async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (!job) return res.status(404).json({ error: 'Job not found' });
  res.json({ total: job.total, processed: job.processed, status: job.status });
});

module.exports = router;
