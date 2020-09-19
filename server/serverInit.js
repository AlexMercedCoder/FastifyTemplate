/////////////////////////////
// Server Initialize
// Export then imported to middleware.js
//////////////////////////// 

const fastify = require('fastify')({
    logger: false
  })

module.exports = fastify