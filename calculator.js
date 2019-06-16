'use strict'

const express = require ('express');       //To use the express server
const bodyParser = require('body-parser'); 


const app = express ();
app.use(bodyParser.urlencoded({extended: true})); //use to get info posted to the server
app.use(express.static('public'));

app.get('/', (req , res) => {
   res.sendFile(__dirname + '/index.html');
});

app.get('/bmi', (req, res) =>{
  res.sendFile(__dirname + '/bmi.html');
});

app.post('/', (req , res) => {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let num3 = Number(req.body.num3);

    let result = num1 + num2 + num3;
    console.log(result);
   res.send( 'It will cost you ' + result + ' euros');
});

app.post('/bmi', (req, res) => {

    let height = Number(req.body.height);
    let weight = Number(req.body.weight);
    let heightInMeters = height /100
    let cal = weight / (heightInMeters * heightInMeters);
    res.send('Your BMI is equal to ' + Math.round(cal)); 
});


app.listen(5000, () => {
  console.log('Server is running at port 5000');    
});