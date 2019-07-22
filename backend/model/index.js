require('dotenv').config()
const mongoose = require('mongoose');

module.exports = () => {
  const connect = () => {
    if (process.env.NODE_ENV !== 'production'){
      mongoose.set('debug', true);
    }
    mongoose.connect(process.env.MONGODB_URL, {
      dbName: process.env.MONGODB_NAME,
      useNewUrlParser: true
    }, (error) => {
      if (error) {
        console.log('Mongodb connection error');
      } else {
        console.log('Mongodb is connected');
      }
    });
  };
  connect();
  mongoose.connection.on('error', (err) => {
    console.error('mongodb connection error', err);
  });
  mongoose.connection.on('disconnected', () => {
    console.err('mongodb is disconnected. Retry connect');
    connect();
  });
  require('./user');
}
