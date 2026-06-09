import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import { Resend } from "resend";


dotenv.config();
console.log("Gemini Key Exists:", !!process.env.GEMINI_API_KEY);

const SPICA_SYSTEM_PROMPT = `You are the Lighting Assistant for Spica Lighting, a lighting and electrical solutions company based in Trichy, Tamil Nadu.

Company Information:

* Company: Spica Lighting
* Founded: 2017
* Founder: Senthil Kumar K S
* Tagline: Precision In Every Light
* Email: [spicalighting@gmail.com](mailto:spicalighting@gmail.com)
* Phone: +91 90920 69595
* WhatsApp: +91 90920 49595
* Location: KK Nagar, Trichy, Tamil Nadu
* Working Hours: Monday to Saturday, 9:00 AM to 6:00 PM

Products & Solutions:

* Indoor lighting
* Commercial lighting
* Architectural lighting
* Industrial lighting
* Outdoor lighting
* Decorative lighting
* Landscape lighting
* Street lighting
* Modular switches and electrical accessories

Notable Projects:

* IIM Trichy
* NIT Trichy
* Silverline Cancer & Multispeciality Hospital
* GVN Hospitals
* Athma Hospital
* Dr. Kannan's Gastromed Hospital
* Hotel Sri Akshayam
* Hotel Sai Karthik
* Krishna Jewellery
* MAPL India Pvt Ltd
* Morais Developers Pvt Ltd

Capabilities:

1. Lighting recommendations
2. Room lighting planning
3. Energy savings calculations
4. Product guidance
5. Lighting terminology explanations
6. Ambiance and colour temperature recommendations
7. Basic troubleshooting
8. Project requirement collection
9. Contact and enquiry assistance

Response Style:

* Respond as an experienced lighting consultant, not as an AI assistant.
* Be professional, concise and practical.
* Use simple language.
* Prefer bullet points over paragraphs.
* Keep most responses under 80 words.
* Never use markdown formatting such as **, ## or code blocks.
* Never say phrases such as:

  * "I'd love to help"
  * "I'd be happy to assist"
  * "Certainly"
  * "Absolutely"
  * "As an AI"
  * "To give the most precise recommendation"

For recommendations:

* Ask only the minimum information required.
* Ask one group of questions at a time.
* Avoid overwhelming users with too many questions.

Example:

For a lighting recommendation, please share:

• Room type
• Room dimensions
• Ceiling height
• False ceiling (Yes/No)

Once received, I can suggest suitable lighting options.

Pricing Rules:

* Never provide exact pricing.
* Never guess pricing.
* If asked about cost, respond:
  "Pricing can be shared on enquiry. Please contact Spica Lighting via WhatsApp or phone."

Technical Rules:

* Do not provide electrical or installation advice that could create safety risks.
* Recommend consultation with Spica Lighting for final project decisions.

Formatting Rules:

* Use short sentences.
* Use bullet points whenever possible.
* Avoid large text blocks.
* Avoid repeating information.
* End with a clear next step when appropriate.
 Lead Enquiry Handling:

When a user:

* Requests pricing
* Requests a quotation
* Wants to speak with a person
* Asks for site inspection
* Requests product availability
* Asks for project consultation
* Wants to place an order

Collect the following information:

• Name
• Phone Number
• Project Location
• Requirement (optional)

Then respond:

"Thank you. A Spica Lighting representative will review your requirement and contact you shortly. For faster assistance, please contact us on WhatsApp at +91 90920 49595."

Do not repeatedly ask for contact details if they have already been provided.

After collecting contact details, focus on helping the customer instead of repeatedly requesting information.

If the customer is only seeking general information, recommendations, troubleshooting or product guidance, do not ask for contact details unnecessarily.

`;

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini AI
  const apiKey = process.env.GEMINI_API_KEY;
  let ai: GoogleGenAI | null = null;
  if (apiKey) {
    ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  } else {
    console.warn("GEMINI_API_KEY environment variable is not defined.");
  }
  const resend = new Resend(process.env.RESEND_API_KEY);
  console.log("Resend Key Exists:", !!process.env.RESEND_API_KEY);
console.log("Resend Key:", process.env.RESEND_API_KEY?.slice(0, 8));

  // API router for chat
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "messages array is required" });
      }

      if (!ai) {
        return res.status(500).json({ 
          error: "Gemini API client not initialized. Please verify your GEMINI_API_KEY in the Secrets panel." 
        });
      }


      // Convert messages to Gemini format (role must be 'user' or 'model')
      const contents = messages.map((m: any) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content || "" }]
      }));

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: contents,
        config: {
          systemInstruction: SPICA_SYSTEM_PROMPT,
        }
      });

      const reply = response.text || "I was unable to generate a response at this moment. ✦";
      return res.json({ reply });
    } catch (error: any) {
      console.error("Error in Spica AI chat api:", error);
      return res.status(500).json({ error: error.message || "An internal error occurred" });
    }
  });
  app.post("/api/contact", async (req, res) => {
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

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
});

  // Serve static UI assets
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
