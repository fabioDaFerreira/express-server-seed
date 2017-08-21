import helloWorldRoutes from './hello-world/hello-world.routes';

module.exports = (app) => {

    const setRoute = baseUrl => {
        return (route) => {
            app[route.method.toLowerCase()](baseUrl+route.url,route.handler);
        };
    }


    helloWorldRoutes.forEach(setRoute('/hello-world'));
};