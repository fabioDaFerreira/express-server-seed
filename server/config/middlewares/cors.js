module.exports = (req, res, next) => {
    if (req && req.method === 'OPTIONS' && req.headers && req.headers.origin) {
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'access-control-request-headers,Content-Type,Cache-Control,authorization');
        res.statusCode = 204;
        return res.end();
    }
    else{
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Credentials', 'true');
    }

    next();
};