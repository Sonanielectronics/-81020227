// qnxcovpxvpbhsmgb

//securesally@gmail.com

//save file as mail_send.js                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   

// require the node module for sending the mail 
var nodemailer = require('nodemailer');

// create reusable transporter object using the gmail transport
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ghogharinikunj97@gmail.com',
        pass: 'tjgjgbpgzsujdnsi'
    }
});

function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }
  var otp = between(100000, 999999);

var mailOptions = {
    from: 'ghogharinikunj97@gmail.com',                   // sender's gmail
    to: 'nikunjghoghari180140111024@gmail.com' ,                  // receiver's gmail
    subject: 'Sending Email using Node.js',     //subject
    text: `${otp}`                     //message Description
};

//send mail using transport object’s sendMail() function
transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
