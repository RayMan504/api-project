var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
});

// pass in unix timestamp or language date
app.get('/:time', function(req, res) {
    console.log(req.params.time);
    // make variable to store timestamp and date query
    var q = req.params.time;
    
    // make array of months
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'];
    
    // make container to send data as response
    var response = {};
    
    // condition that makes new date if query is a number
    if(!isNaN(q)) {
        var date = new Date(q * 1000);
    }
    
    // make container for time string
    var time = (isNaN(q)) ? q : `${months[date.getMonth()]} ${String(date.getDate())}, ${String(date.getFullYear())}`;
    // if string has no timestamp and date 
    if(new Date(time) == 'Invalid Date') {
      response.unix = null;
      response.natural = null;
    } else {
        // return timestamp and date
      response.unix = Date.parse(time) / 1000;
      response.natural = time;
    }
    
    res.json(response);
})