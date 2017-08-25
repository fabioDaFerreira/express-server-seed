import helloWorldRoutes from './hello-world/hello-world.routes';
import authRoutes from './auth/auth.routes';

module.exports = (app, config) => {

    const setRoute = baseUrl => {
        return (route) => {
            var args = [baseUrl + route.url];
            if (route.middlewares) {
                route.middlewares.forEach(middleware => args.push(middleware));
            }
            if(route.handler){
                args.push(route.handler);
            }
            app[route.method.toLowerCase()](...args);
        };
    }


    helloWorldRoutes().forEach(setRoute('/hello-world'));
    authRoutes(config.auth).forEach(setRoute('/auth'));

};