let patientDetails = require('../models/patients');
let mongoose = require('mongoose');
const bodyParser = require('body-parser');
let jwt = require('jsonwebtoken');
let config = require('../config');
const mongo = require('mongodb').MongoClient

module.exports = async function (req, res) {

  /*write your code here*/
  const patients = await patientDetails.find();
  res.status(200).json(patients);
}