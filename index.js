const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send("Saludos");
})

app.listen(PORT,() =>{
    console.log("Works from port " + PORT);
});

function alan(){
    var num1 = 7;
    var num2 = 10;
   suma = num1 + num2;
   alert("La suma es: "+suma);
}