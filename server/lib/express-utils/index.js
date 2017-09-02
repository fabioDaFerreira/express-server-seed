import { Router } from 'express';


module.exports.generateRouter = (routes) => {
    var router = Router();
    var addRoute = (route) => {
        var args = [route.url];
        if (route.middlewares) {
            route.middlewares.forEach(middleware => args.push(middleware));
        }
        if (route.handler) {
            args.push(route.handler);
        }
        router[route.method.toLowerCase()](...args);
    };

    routes.forEach(addRoute);

    return router;
}

module.exports.addMiddleware = function (route,middleware) {
    'middlewares' in route && route.middlewares instanceof Array ?
        route.middlewares.push(middleware) :
        route.middlewares = [middleware]
    return route;
}
