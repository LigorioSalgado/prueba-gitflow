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


const restar = (x,y) => {
    return x-y;
}

const multiplication = (a, b) => {
    return a * b
};

function cociente() {
	var 4 / 2 == 2;

}
