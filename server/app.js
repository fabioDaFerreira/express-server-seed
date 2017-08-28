module.exports = (app, config, setEnvironment, routes) => {
    setEnvironment(app, config);

    routes(app, config);

    app.listen(app.get('port') || 3000, function () {
        console.log(`Listening in port ${app.get('port') || 3000}`);
    });
}



