const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Import Internship model
const Internship = require("../../models/Internship");

// GET all posts by newest first
router.get("/", (req, res) => {
  Internship.find({}).sort("-date").exec((err, docs) => {
    if (err) throw err;
    return res.json(docs);
  });
});

// GET all posts with category of Software
router.get("/software", (req, res) => {
  Internship.find({ "category": "software" }).exec((err, docs) => {
    if (err) throw err;
    return res.json(docs);
  });
});

// GET all posts with category of Marketing
router.get("/marketing", (req, res) => {
  Internship.find({ "category": "marketing" }).exec((err, docs) => {
    if (err) throw err;
    return res.json(docs);
  });
});

// GET all posts with category of Design
router.get("/design", (req, res) => {
  Internship.find({ "category": "design" }).exec((err, docs) => {
    if (err) throw err;
    return res.json(docs);
  });
});

// GET all posts with category of Top-Company
router.get("/top-companies", (req, res) => {
  Internship.find({ "category": "top-company" }).exec((err, docs) => {
    if (err) throw err;
    return res.json(docs);
  });
});

// GET all posts with category of Non-Techy
router.get("/non-techy", (req, res) => {
  Internship.find({ "category": "non-tech" }).exec((err, docs) => {
    if (err) throw err;
    return res.json(docs);
  });
});

// GET all posts with tags of selected tag
router.get("/tag/:tag", (req, res) => {
  Internship.find({ "extratags": { "$regex": req.params.tag } }).exec((err, docs) => {
    if (err) throw err;
    return res.json(docs);
  });
});

// GET all posts that contain the search word(s)
router.get("/search/:search", (req, res) => {
  Internship.find({ "$text": { "$search": req.params.search } }).exec((err, docs) => {
    if (err) throw err;
    return res.json(docs);
  });
});

// This POST route will post a new internshipa
router.post("/post", (req, res) => {
  const extratags = req.body.extratags.toLowerCase();
  const newInternship = new Internship({
    email: req.body.email,
    position: req.body.position,
    companyname: req.body.companyname,
    basedfrom: req.body.basedfrom,
    locationrestrictions: req.body.locationrestrictions,
    category: req.body.category,
    extratags,
    description: req.body.description,
    requirements: req.body.requirements,
    salary: req.body.salary,
    applyurl: req.body.applyurl,
    promote: req.body.promote
  });

  newInternship.save().then(internship => res.json(internship));
});

module.exports = router;