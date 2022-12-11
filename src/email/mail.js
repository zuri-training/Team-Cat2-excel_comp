const mailer = require("nodemailer");
const { Hello } = require('../template/hello_template');
const { Thanks } = require('../template/thank_template');

const getEmailData = (to, name, template) => {
  let data = null;
  switch (template) {
    case "hello":
      data = {
        from: "Mabrook <mubarakmahmunalaka@gmail.com>",
        to,
        subject: `hello `,
        html: Hello()
      }
      break
    
    case "thanks":
      data = {
        from: "Mabrook <mubarakmahmunalaka@gmail.com>",
        to,
        subject: `hello`,
        html: Thanks()
      }
      break;
    default:
      data;
  }
  return data
}

const sendEmail = (to, type) => {
  const smtpTransport = mailer.createTransport({
    services: "Gmail",
    auth: {
      user: "mubarakmahmunalaka@gmail.com",
      pass: "wrzjbavyxhvthmks"
    }

    
  })
  const mail = getEmailData(to, type)
  smtpTransport.sendMail(mail, function (error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log(" email sent successfully")
    }
    smtpTransport.close();
  })
}

module.exports ={ sendEmail}