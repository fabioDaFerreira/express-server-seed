import textsModel from './texts/texts.model';
import authRoutes from './auth/auth.routes';
import apiMongooseRoutes from './api-mongoose/api-mongoose.routes';
import { Router } from 'express';

module.exports = (app, config) => {

    const addRouter = (baseUrl, routes) => {
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

        app.use(baseUrl, router);
    }


    addRouter('/auth', authRoutes(config.auth));
    addRouter('/texts',apiMongooseRoutes(textsModel));

};