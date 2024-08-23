const dbConfig = require("../config/confi-db");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose
db.url = dbConfig.url;
db.condidat = require ("./condidat");
db.employeur = require ("./employeur");
db.admin = require ("./admin");
db.roles = require ("./roles");
//identify roles her
db.ROLES = ["condidat", "employeur", "condidat"];
module.exports = db;