// services/mailService.js
const nodemailer = require("nodemailer");
require("dotenv").config();

// Clean, simple Gmail transporter
const transporter = nodemailer.createTransport({
  service: "gmail", // 🔥 No MAIL_HOST needed
  auth: {
    user: process.env.MAIL_USER, // Your Gmail
    pass: process.env.MAIL_PASS  // Your Google App Password
  }
});

function emailTemplate(verificationLink) {
  return `
  <div style="font-family: Arial, sans-serif; background: #f4f7fb; padding: 40px;">
    <div style="max-width: 600px; margin: auto; background: white; padding: 30px; border-radius: 12px;">
      
      <h1 style="text-align:center; color:#0066FF; margin-bottom:5px;">(FAKE)Codebility(FAKE)</h1>
      <p style="text-align:center; margin-top:0; color:#777;">(FAKE)WHERE CODE MEETS COMMUNITY(FAKE)</p>

      <h2 style="text-align:center;">Welcome to the Developer Community! 🚀(DEVRITCHMARC)</h2>
      <p style="text-align:center; color:#333;">
        You're one step away from joining thousands of passionate developers,
        engineers, and tech innovators. (DEVRITCHMARC)
      </p>

      <div style="background:#eef6ff; padding:20px; border-radius:10px; margin-top:20px;">
        <p style="text-align:center; margin-bottom:20px;">
          Please confirm your email address to activate your Codebility account
          and start your journey:
        </p>

        <div style="text-align:center;">
          <a href="${verificationLink}"
            style="background: linear-gradient(90deg, #007BFF, #00C897);
              color:white; padding:15px 30px; border-radius:8px;
              text-decoration:none; font-size:16px; display:inline-block;">
            Confirm Your Account
          </a>
        </div>
      </div>

      <div style="margin-top:30px; padding:15px; background:#f7f7f7; border-radius:8px; color:#555;">
        <code>
          console.log("Welcome to Codebility! 🎉");
        </code>
      </div>

    </div>
  </div>
  `;
}

async function sendVerificationEmail(email, token) {
  const verificationLink = `http://localhost:3000/api/auth/verify-email?token=${token}`;

  await transporter.sendMail({
    from: `"Codebility" <${process.env.MAIL_FROM}>`,
    to: email,
    subject: "Confirm Your Codebility Account",
    html: emailTemplate(verificationLink)
  });

  console.log("Verification email sent to:", email);
}

module.exports = {
  sendVerificationEmail
};
