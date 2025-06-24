import axios from "axios";

/**
 * Sends an email using Brevo API
 * @param {Object} options - Email sending options
 * @param {string} options.template - HTML template for the email
 * @param {Object} options.data - Data to be used in the template
 * @param {string} options.subject - Email subject
 * @param {Object} options.sender - Optional sender information {name, email}
 * @param {Object} options.recipient - Optional recipient information {name, email}
 * @returns {Promise<Object>} - Response from Brevo API
 */
export async function sendEmail({
  template,
  data,
  subject,
  sender = {
    name: data.name,
    email: process.env.EMAIL_SENDER_EMAIL,
  },
  recipient = {
    name: "Esprit Conseil",
    email: process.env.EMAIL_RECIPIENT_EMAIL,
  },
}) {
  try {
    // Validate required environment variables
    if (!process.env.EMAIL_SENDER_EMAIL || !process.env.EMAIL_RECIPIENT_EMAIL) {
      throw new Error(
        "Missing required email configuration in environment variables"
      );
    }

    // Replace template variables with actual data
    let htmlContent = template;
    Object.entries(data).forEach(([key, value]) => {
      const regex = new RegExp(`{{${key}}}`, "g");
      htmlContent = htmlContent.replace(regex, value || "");
    });

    const emailData = {
      sender,
      to: [recipient],
      subject,
      htmlContent,
      replyTo: {
        email: data.email, // Use the sender's email from data as reply-to
        name: data.name, // Use the sender's name from data
      },
    };

    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      emailData,
      {
        headers: {
          "Content-Type": "application/json",
          "api-key": process.env.BREVO_API_KEY,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Email sending failed:",
      error?.response?.data || error.message
    );
    throw error;
  }
}
