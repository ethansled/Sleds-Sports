const express = require("express");

const ejs = require("ejs");

const app = new express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set("view engine","ejs");
app.use("/public", express.static(__dirname + "/public"));

app.get("/" , (req,res) => {
    res.render("index");
});

app.get("/baseball" , function(req,res) {
    res.render("../views/baseball.ejs");
});

app.get("/basketball" , function(req,res) {
    res.render("../views/basketball.ejs");
});

app.get("/football" , function(req,res) {
    res.render("../views/football.ejs");
});

app.get("/hockey" , function(req,res) {
    res.render("../views/hockey.ejs");
});

app.get("/soccer" , function(req,res) {
    res.render("../views/soccer.ejs");
});

app.get("/subscribe" , function(req,res) {
    res.render("../views/subscribe.ejs");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is Running on ${PORT}`));