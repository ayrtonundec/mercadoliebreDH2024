const express = require("express");
const app = express();
const path = require("node:path");

app.use(express.static("./public"));


app.listen(PORT,()=> console.log(`Servidor corriendo en puerto ${3030}`));

app.get('/', (req, res) => {
    res.sendFile(path.resolve("views/home.html"));
 });
