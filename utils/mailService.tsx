const nodemailer = require('nodemailer')

export async function sendMail(subject: string, toEmail: string, otpText: string, attachment?: any) {
  const transporter = nodemailer.createTransport({
    host: process.env.NODEMAILER_HOST,
    port: process.env.NODEMAILER_PORT,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_AUTH_FROM,
      pass: process.env.EMAIL_AUTH_FROM_PW
    }
  })

  const mailOptions = {
    from: process.env.EMAIL_AUTH_FROM,
    to: toEmail,
    subject: subject,
    text: otpText,
    attachments: attachment ? [attachment] : null
  }

  await new Promise((resolve, reject) => {
    // if(attachment) mailOptions.attachments = [attachment];
    // send mail
    transporter.sendMail(mailOptions, (err: any, response: any) => {
      if (err) {
        reject(err)
      } else {
        resolve(response)
      }
    })
  })
}
