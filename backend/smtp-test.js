const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'myprojecttest8@gmail.com',
    pass: 'gjvpacpwmnofatyp'
  }
});

transporter.verify((err, success) => {
  if (err) {
    console.error(err);
  } else {
    console.log('SMTP OK');
  }
});