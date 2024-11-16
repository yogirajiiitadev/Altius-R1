const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

// const userSchema = new mongoose.Schema({
//     username
// })