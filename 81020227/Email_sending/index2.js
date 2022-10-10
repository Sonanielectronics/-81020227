var nodemailer = require("nodemailer");
 
var sender = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ghogharinikunj97@gmail.com',
    pass: 'tjgjgbpgzsujdnsi'
  }
});
 
var mail = {
  from: "ghogharinikunj97@gmail.com",
  to: "nikunjghoghari180140111024@gmail.com , ghogharinikunj456@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
  html: '<div style="font - family: verdana; max-width:500px; margin-left">' + 'more string and string',
  // html:"<h1>Hi</h1>",
  attachments: [
        {
            filename: 'index.png',
            path: __dirname + '/index.png',
            cid: 'uniq-mailtrap.png'
        }
    ]
};
 
sender.sendMail(mail, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent successfully: "
                 + info.response);
  }
});