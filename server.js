var express = require('express')
var app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// });

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
});

// pass in unix timestamp or language date
app.get('/:query', function(req, res) {
    console.log(req.params.query);
    // make variable to store timestamp and date query
    var q = req.params.query;
    
    // make array of months
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'];
    
    // make container to send data as response
    var response = {};
    
    // condition that makes new date if query is a number
    if(!NaN(q)) {
        var date = new Date(q * 1000);
    }
    
    
    // if string has both timestamp and date 
        // return both
    // else
        // return null
    res.send('null');
})