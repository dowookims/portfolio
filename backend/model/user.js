const mongoose = require('mongoose');
const { Schema } = mongoose;
const crypto = require('crypto');
require('dotenv').config()

const User = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  admin: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default:Date.now,
  },
});

User.statics.create = function(username, email, password){
  const encrypted = crypto.createHmac('sha1', process.env.SECRET)
                    .update(password)
                    .digest('base64')
  const user = new this({
    username,
    email,
    password: encrypted
  })
  return user.save();
}

User.statics.findOneByUsername = function(username) {
  return this.findOne({
    username
  }).exec();
}

User.statics.findOneByEmail = function(email){
  return this.findOne({
    email
  }).exec();
}

User.methods.verify = function(password) {
  const encrypted = crypto.createHmac('sha1', process.env.SECRET)
                    .update(password)
                    .digest('base64')
  return this.password === encrypted
}

User.methods.assignAdmin = function() {
  this.admin = true
  return this.save()
}


module.exports = mongoose.model('User', User)
