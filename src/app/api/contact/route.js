import nodemailer from "nodemailer";
export async function POST() {
  try {
    const body = await req.json();
    const { name, phone, subject, message } = body;

    //set up transporter

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOption = {
      from: phone,
      to: process.env.EMAIL_USER,
      subject,
      text: `${name} ${message}`,
    };

    //sent mail

    await transporter.sendMail(mailOption);

    return new Response(
      JSON.stringify({ success: true, message: "Mail Sent Successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);

    return new Response(
      JSON.stringify({ success: false, message: "Failed mail sent" }),
      { status: 500 }
    );
  }
}
