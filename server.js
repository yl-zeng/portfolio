const express = require("express");
var nodemailer = require('nodemailer');
const bodyParser = require('body-parser')
const fs = require("fs");

var app = express();

const PORT = process.env.PORT || 3000;

const PASS = process.env.PASS || fs.readFileSync("./config.txt");

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'd26842684@gmail.com',
        pass: PASS
    }
});



app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("public"));

app.post('/send',(req,res)=>{
  var data = req.body;
  var mailOptions = {
      from: `"Yunlin.io 👻" <${data.email}>`, // sender address
      to: 'ylinzeng69@gmail.com', // list of receivers
      subject: `Hello ✔ ${data.name}`, // Subject line
      html: `Hello world ? <br/><br/>from: ${data.email}<br/><br/>${data.name}<br/><br/>${data.text}`, // plain text body
  };
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
  });
});



app.listen(PORT,()=>{
  console.log("server start up!");
})
