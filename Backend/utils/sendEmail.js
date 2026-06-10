const nodemailer = require('nodemailer');
const env = require('dotenv');
env.config();

const sendEmail = async(to,subject,text) => {
    try{
        const transporter = nodemailer.createTransport({
            service : 'Gmail',
            auth :{
                user : process.env.EMAIL_USER,
                pass : process.env.EMAIL_PASS
            },
            tls: {
                rejectUnauthorized: false    
            }
        });
        const mailOptions = {
            from  : process.env.EMAIL_USER,
            to,
            subject,
            text
        };
        await transporter.sendMail(mailOptions);
    }
    catch(err){
        console.log(err);
        console.log("Error Sending mail");
    }
};
module.exports = sendEmail;