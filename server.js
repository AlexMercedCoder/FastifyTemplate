///////////////////////////
// Trigger the Server Listener Here
//////////////////////////
const app = require("./controllers/routes");
const PORT = process.env.PORT ? process.env.PORT : 3000;

app
  .then((fastify) => {
    fastify.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
