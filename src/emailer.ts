const nodemailer = require("nodemailer");
const config = require("../config.json");

export async function sendEmail(body: any){
const transporter = nodemailer.createTransport({
    auth: {
        pass: config.emailPassword,
        user: config.emailAddress,
    },
    service: "gmail",
});
const mailOptions = {
    from: config.emailAddress,
    subject: `Weather `,
    text: body,
    to: config.emailTo,
};
await transporter.sendMail(mailOptions, function(error: any, info: any){
    if (error) {
        console.log(error);
    } else {
        console.log("Email sent: " + info.response);
    }
});

}
