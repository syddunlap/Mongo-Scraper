// This page gives the routes for the page that is to be displayed to the user.

const controller = require(`../controllers/controller`);

module.exports = (app) => {
    // Routes to the main page
    app.get(`/`, controller.index);

    // Any non-existing routes
    app.get("*", controller.noRoute);

};