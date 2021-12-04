const express = require("express");
const ejs = require("ejs");
const app = new express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set("view engine","ejs");
app.use("/public", express.static(__dirname + "/public"));

app.get("/" , (res,req) => {
    res.render("../views/index.ejs");
});

app.get("/baseball" , (res,req) => {
    res.render("../views/baseball.ejs");
});

app.get("/basketball" , (res,req) => {
    res.render("../views/basketball.ejs");
});

app.get("/football" , (res,req) => {
    res.render("../views/football.ejs");
});

app.get("/hockey" , (res,req) => {
    res.render("../views/hockey.ejs");
});

app.get("/soccer" , (res,req) => {
    res.render("../views/soccer.ejs");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is Running on ${PORT}`));