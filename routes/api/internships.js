const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Import Internship model
const Internship = require("../../models/Internship");

// Return all posts by newest first
router.get("/", (req, res) => {
  Internship.find({}).sort("-date").exec((err, docs) => {
    if (err) throw err;
    return res.json(docs);
  });
});

// This POST route will post a new internshipa
router.post("/post", (req, res) => {
  const newInternship = new Internship({
    email: req.body.email,
    position: req.body.position,
    companyname: req.body.companyname,
    basedfrom: req.body.basedfrom,
    locationrestrictions: req.body.locationrestrictions,
    category: req.body.category,
    extratags: req.body.extratags,
    description: req.body.description,
    requirements: req.body.requirements,
    salary: req.body.salary,
    applyurl: req.body.applyurl,
    promote: req.body.promote
  });

  newInternship.save().then(internship => res.json(internship));
});

module.exports = router;