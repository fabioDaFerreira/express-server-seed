module.exports = {
    greeting: function (name) {
        return `Hello ${name}!`;
    }
    , talk: function (name,message) {
        return `${name} says: ${message}`;
    }
    , bye: function (name) {
        return `Bye ${name}!`;
    }
};