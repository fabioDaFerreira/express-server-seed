import textsModel from './texts/texts.model';
import articlesModel from './blog/articles.model';
import authRoutes from './auth/auth.routes';
import apiMongooseRoutes from './api-mongoose/api-mongoose.routes';
import validateJwt from './auth/jwt/validateJwt';
import { generateRouter, addMiddleware } from './express-utils';


module.exports = (app, config) => {
    const isAuthenticated = validateJwt(config.auth.sessionSecret);

    app.use('/auth', generateRouter(authRoutes(config.auth)));
    app.use('/texts', generateRouter(apiMongooseRoutes(textsModel).map(route => addMiddleware(route, isAuthenticated))));
    app.use('/articles', generateRouter(apiMongooseRoutes(articlesModel).map(route => addMiddleware(route, isAuthenticated))));

};