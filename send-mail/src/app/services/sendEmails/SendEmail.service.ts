import nodemailer from "nodemailer";
import { BodySendMailRequest } from "@/models/bodySendEmailRequest.model";

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // or 'STARTTLS'
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
        rejectUnauthorized: false
    }
    });


export const sendEmailService = async (body: BodySendMailRequest) => {

    try {
        const info = await transporter.sendMail({
            from: body.from,
            to: body.to,
            subject: body.subject,
            text: body.content,
        })
    return {success: true, message: "Email sent successfully"}

    } catch (error) {
            return {success: false, message: error}

    }


    

}