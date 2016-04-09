var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// Twilio Credentials
var accountSid = 'ACde4f32b2e2481d1ff811673558d239ba';
var authToken = '01f07c47d6d53ac3f4a1473c2f72b455';
//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);
var app = express();
app.use(bodyParser.json());
app.post("/sendSms", function (req, res, next) {
    console.log("hitted");
    client.messages.create({
        to: req.body.number,
        from: "+12035877316",
        body: req.body.message
    }, function (err, message) {
        if (!err) {
            console.log("no err");
            res.json({ sent: true, data: message });
        }
        else {
            console.log("err");
            res.status(500);
            res.json({ sent: false, err: err });
        }
    });
});
var indexPath = path.resolve(__dirname, "client/www");
app.use(express.static(indexPath));
app.listen(3000, function () {
    console.log("listening on 3000");
});
