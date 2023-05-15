var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var servicePort = 80;

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set our port
var port = process.env.PORT || servicePort;

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();

const now = new Date();

app.use('/', router);

router.get('/', function (req, res) {
    res.json({
        message: `Hello - I'm BLUE`, date: now.toString()
    });
    console.log(`Request made at ${now.toString()}`);
});

// START THE SERVER
// =============================================================================
app.listen(port);
console.log(`service listening on port: ` + port);