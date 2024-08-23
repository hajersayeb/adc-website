const express = require("express");
const cors = require("cors");
const dbConfig = require("./app/config/confi-db");
const app = express();
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
const Role = db.roles;
db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to ADC application." });
});
// routes
//calling the router
require("./app/routes/authRoutes.js")(app);
require("./app/routes/condidatRoutes.js")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "condidat"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'condidat' to roles collection");
      })
      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'admin' to roles collection");
      });
      new Role({
        name: "employeur"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'employeur' to roles collection");
      });
    }
  });
}
