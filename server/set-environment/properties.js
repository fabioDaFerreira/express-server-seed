module.exports = (app, properties) => {
    if(!properties){
        return;
    }
    Object.keys(properties).forEach(key => app.set(key, properties[key]));
};