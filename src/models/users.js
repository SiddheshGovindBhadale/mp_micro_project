const express = require('express');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  data:{
    type:String
  }
})

const User = new mongoose.model("User" ,userSchema );

module.exports = User;