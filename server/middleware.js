/////////////////////////////
// Server Initialize
// Import Server add middleware, export to controllers
////////////////////////////
const fastify = require("./serverInit");
const morgan = require("morgan");
const cors = require("cors");
const { corsOptionsDelegate } = require("./configs");

//Enable Ability to use express middleware
const middleware = fastify.register(require("fastify-express"));

//add middleware
const routes = middleware.then((fastify) => {
  fastify.use(
    cors(process.env.NODE_ENV === "production" ? corsOptionsDelegate : null)
  );
  fastify.use(morgan("tiny"));
  return fastify;
});

module.exports = routes;
