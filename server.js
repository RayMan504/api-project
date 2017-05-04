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
    var date = req.params.query;
    // if string has both timestamp and date 
        // return both
    // else
        // return null
    res.send('null');
})