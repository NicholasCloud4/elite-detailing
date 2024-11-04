import nodemailer from 'nodemailer';

export async function POST(req) {
    const { name, email } = await req.json();

    // Configure the transporter for the email provider
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Gmail service
        host: 'smtp.gmail.com',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        // Send the email
        const info = await transporter.sendMail({
            from: 'EliteDetailing <elitedetailing207@gmail.com>',
            to: email,
            subject: "Thank you for signing up!",
            html:
                `
                <h1>Hello ${name},</h1>
                <p>Thank you for signing up to EliteDetailing!</p>
                <img src="cid:coupon-image" width="500" height="500" alt="Coupon Image">
            `,

            attachments: [
                {
                    filename: 'coupon.jpg',
                    path: 'public/coupon.jpg',
                    cid: 'coupon-image',
                },
            ],
        });

        console.log('Message sent:', info.messageId);
        return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ message: 'Error sending email', error }), { status: 500 });
    }
}
