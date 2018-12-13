const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InternshipSchema = new Schema({
  email: { type: String, requierd: true },
  position: { type: String, required: true },
  companyname: { type: String, required: true },
  basedfrom: { type: String, requied: true },
  locationrestrictions: { type: String, required: false },
  category: { type: String, required: false },
  extratags: { type: [String], required: false },
  description: { type: String, required: false },
  requirements: { type: String, required: false },
  salary: { type: String, required: false },
  applyurl: { type: String, requried: true },
  promote: { type: Boolean, required: false },
  date: { type: Date, default: Date.now }
});

InternshipSchema.index( { "$**": "text" });

module.exports = Internship = mongoose.model("internship", InternshipSchema);