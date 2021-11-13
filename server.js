const express = require("express");
const app = express();
const importData = require("./Components/Lists/grade.json")
let port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/school', (req, res) =>{
    res.send(importData)
} )

app.listen(port, () =>{
    console.log("example app");
})