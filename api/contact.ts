import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      name,
      email,
      phone,
      company,
      location,
      message,
    } = req.body;

    await resend.emails.send({
      from: "Spica Lighting <onboarding@resend.dev>",
      to: "harindranath2005@gmail.com",
      subject: `New Website Enquiry - ${name}`,
      html: `
        <h2>New Website Enquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Location:</strong> ${location}</p>

        <hr/>

        <p><strong>Requirement:</strong></p>
        <p>${message}</p>
      `,
    });

    if (email) {
      await resend.emails.send({
        from: "Spica Lighting <onboarding@resend.dev>",
        to: email,
        subject: "We've Received Your Enquiry",
        html: `
          <h2>Thank you for contacting Spica Lighting</h2>

          <p>Your enquiry has been received successfully.</p>

          <p>Our team will contact you shortly.</p>

          <p>
            Phone: +91 90920 69595<br/>
            WhatsApp: +91 90920 49595
          </p>

          <p>Precision In Every Light</p>
        `,
      });
    }

    return res.status(200).json({
      success: true
    });

  } catch (error: any) {
    console.error(error);

    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
}