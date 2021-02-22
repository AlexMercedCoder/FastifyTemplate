///////////////////////////
// Trigger the Server Listener Here
//////////////////////////
const app = require("./controllers/routes");
const PORT = process.env.PORT ? process.env.PORT : 3000;
const {log} = require("mercedlogger")

app
  .then((fastify) => {
    fastify.listen(PORT, () => {
      log.green("Server Start", `Listening on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
