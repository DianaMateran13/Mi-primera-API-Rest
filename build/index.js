import express from "express";
var app = express();
var port = 3000;
app.get("/", function (req, res) {
    res.send("Hello World");
});
app.listen(3000, function () {
    console.log("Server is running on port 3000");
});
