////////////////////////////////
// Define Routes Here
///////////////////////////////
const routes = require("../server/middleware");

const app = routes.then((router) => {

    router.get("/", (req, res) => {
        res.send({ hello: "Hello World" });
      });


    return router

})

module.exports = app
