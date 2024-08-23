

const authJwt = require("../auth/authJwt");
const controller = require("../controllers/condidatControllers");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get("/api/test/condidat", [authJwt.verifyToken], controller.condidatBoard);

  app.get(
    "/api/test/employeur",
    [authJwt.verifyToken, authJwt.isEmployeur],
    controller.employeurBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};