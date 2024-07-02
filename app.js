const express = require("express");
const app = express();
const path = require("node:path");
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT,()=> console.log(`Servidor corriendo en puerto ${PORT}`));

app.get("/", (req, res) => {
    res.sendFile(path.resolve (__dirname, "./views/home.html"));
});

 app.get("/register", (req, res) => {
    res.sendFile(path.resolve (__dirname, "./views/register.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve (__dirname, "./views/login.html"));
});