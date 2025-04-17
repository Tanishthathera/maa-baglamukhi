const Mailjet = require('node-mailjet');
const mailjet = Mailjet.apiConnect(
  process.env.MJ_APIKEY,
  process.env.MJ_SECRET_KEY,
);

const sendEmailFromUser = async (sender, receiver, subject, htmlContent) => {
  const request = mailjet
    .post('send', { version: 'v3.1' })
    .request({
      Messages: [
        {
        From: {
          Email: receiver.email,
          Name: receiver.name
        },
        To: [
          {
            Email: receiver.email,
            Name: receiver.name
          }
        ],
        ReplyTo: {
            Email: sender.emailId, // so admin can reply directly to user
        },
        Subject: subject,
        HTMLPart: htmlContent
      }]
    }
  )
  request
    .then((result) => {
      // console.log("sendEmail result", result)
    })
    .catch((err) => {
      // console.log("sendEmail err", err)
      // console.log("sendEmail statusCode", err.statusCode)
    })
}

module.exports = sendEmailFromUser