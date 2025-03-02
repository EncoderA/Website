"use server"
import { Resend } from "resend"
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND)
export const sendEmail = async (info) => {
    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'beatcoder12@gmail.com',
        subject: 'Bussiness Deal',
        html: `
            <div>
                <p>${info.message}</p>
                <div>
                <p> Name :<strong>${info.name}</strong></p>
                <p> email :<strong>${info.email}</strong></p>
                </div>
        `
    })
}