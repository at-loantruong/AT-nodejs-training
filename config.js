const config = {
  db: {
    host: 'localhost',
    port: 27017,
    name: 'demoDB'
  }
 };

 module.exports = config;

 // db.js
 const mongoose = require('mongoose');
 var mongodb = require('mongodb');
 mongoose.Promise = global.Promise;

 const { db: { host, port, name } } = config;
 const connectionString = `mongodb://${host}:${port}/${name}`;
 mongoose.connect(connectionString, {useMongoClient: true});
