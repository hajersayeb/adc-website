const dbConfig = require("../config/confi-db");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose
db.url = dbConfig.url;
db.users = require ("./users");
db.roles = require ("./roles");
//identify roles her
db.ROLES = ["user"];
module.exports = db;