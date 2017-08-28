module.exports = response => (err, json) => {
    if (err) {
        response.status(400).send(err);
    }
    response.json(json);
};;