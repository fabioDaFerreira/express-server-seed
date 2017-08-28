import handlers from './api-mongoose.handlers';

module.exports = (model) => {

    if (!model || !model.collection || !model.collection.collectionName) {
        return null;
    }

    function addRoutes(routes) {
        return function (route) {
            routes.push({
                method: route[0],
                url: route[1],
                handler: route[2]
            });
        }
    };


    var routes = [];

    var routesOptions= [
        ['get', '/', handlers.find(model)],
        ['get', `/:id`, handlers.findById(model)],
        ['post', `/`, handlers.create(model)],
        ['put', `/:id`, handlers.updateById(model)],
        ['delete', `/:id`, handlers.deleteById(model)]
    ];

   routesOptions.forEach(addRoutes(routes));

    return routes;
};