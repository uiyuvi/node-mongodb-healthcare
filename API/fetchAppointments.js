let appointments = require('../models/appointments');
let mongoose = require('mongoose');
const bodyParser = require('body-parser');
let jwt = require('jsonwebtoken');
let config = require('../config');
const mongo = require('mongodb').MongoClient

module.exports = async function (req, res) {

  /*write your code here*/
  if (req.body.patientId) {
    const appointmentFound = await appointments.findOne({ patientId: req.body.patientId });
    console.log("single appointment", req.body.patientId, appointmentFound)
    return res.status(200).json([appointmentFound]);
  }
  const appointmentsFound = await appointments.find();
  console.log("all appointments", appointmentsFound)
  res.status(200).json(appointmentsFound);
}