const cors = require('cors');
const compression = require('compression');
const requestIp = require('request-ip');
const Handler = require('@henderea/middleware-handler');

const handler = new Handler();
handler.use(cors());
handler.use(compression());

handler.handle((req, res) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    const resp = JSON.stringify({ ip: requestIp.getClientIp(req) });
    res.setHeader('Content-Length', resp.length);
    res.end(resp);
});

module.exports = handler.handler;