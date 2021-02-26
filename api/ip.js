const cors = require('cors');
const requestIp = require('request-ip');
const Handler = require('@henderea/middleware-handler');

const handler = new Handler();
handler.use(cors());

handler.handle((req, res) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify({ip: requestIp.getClientIp(req) }));
});

module.exports = handler.handler;