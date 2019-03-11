// Our routes file uses this to know what to render to the webpage

module.exports = {
    index: (req, res) => {
        res.render("index", {
            message: "Hello World",
        });
    },
    wrongRoute: (req, res) => {
        res.render("404");
    },
};