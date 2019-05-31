const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send("Saludos");
})

app.listen(PORT,() =>{
    console.log("Works from port " + PORT);
});

const suma = (a, b) => {
    return a + b
};