
module.exports = function (app) {
    app.get("/", function (req, res) {
        console.log("inside /");
        res.send("hai");
    });
}
  