module.exports = (app, middlewares) => {
    if(!middlewares){
        return;
    }
    middlewares.forEach(fn => app.use(fn()));
};