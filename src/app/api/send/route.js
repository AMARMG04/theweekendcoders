const nodemailer = require("nodemailer");

import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  if (req.method === "POST") {
    try {
      const data = await req.json();
      const name = data.name;
      const email = data.email;
      const phone = data.phone;
      const profession = data.profession;
      const requirement = data.requirement;
      const description = data.description;

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "theweekendcodershq@gmail.com", // Replace with your email
          pass: "ivqq ppbl vzil opoo", // Replace with your email password or use an app-specific password
        },
      });

      const createAdminEmail = () => {
        return `
            New form submission:
        
            Name: ${name}
            Email: ${email}
            Selected Services: ${requirement}
            Profession: ${profession}
            Phone Number: ${phone}
            Requirement: ${description}
          `;
      };

      const emailTemplate = `
          <html lang="en">
          <head>
            <style>
              body {
                padding: 20px;
                font-family: Arial, Helvetica, sans-serif;
                display: flex;
                justify-content: center;
              }


              .content {
                max-width: 620px;
                text-align: justify;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <p>Dear Client,</p>
              <p class="content">
                We have received your inquiry and are
                excited to learn more about your project. <br><br>
                Our team is currently reviewing
                the details you provided, and we will reach out to you as soon as possible. 
                We appreciate your interest in working with us
                and look forward to the opportunity to collaborate on your project. <br><br>
                If you have any urgent questions or if there's anything else you'd like to share,
                don't hesitate to contact us directly to this email or call
                us. <br><br>

                Thank you.<br><br>

                Best regards,<br>
                Team at TWC,<br>
                theweekendcoders,<br>
                9789260864.
                
              </p>
            </div>
          </body>
        </html>
        
      `;

      const customerMailOptions = {
        from: "theweekendcodershq@gmail.com", // Replace with your email
        to: email,
        subject: `Thank you for contacting us ${name}`,
        html: emailTemplate,
      };

      await new Promise((resolve, reject) => {
        transporter.sendMail(customerMailOptions, (error, info) => {
          if (error) {
            console.error(
              "Error sending acknowledgment email to the customer:",
              error
            );
            reject(error);
          } else {
            console.log("Acknowledgment email sent to the customer");
            resolve(info);
          }
        });
      });

      // Send form submission email to the admin
      const adminMailOptions = {
        from: "theweekendcodershq@gmail.com", // Replace with your email
        to: "theweekendcodershq@gmail.com", // Replace with admin email
        subject: "New Form Submission",
        text: createAdminEmail(),
      };

      await new Promise((resolve, reject) => {
        transporter.sendMail(adminMailOptions, (error, info) => {
          if (error) {
            console.error(
              "Error sending form submission email to the admin:",
              error
            );
            reject(error);
          } else {
            console.log("Form submission email sent to the admin");
            resolve(info);
          }
        });
      });

      return NextResponse.json(
        { status: 200 },
        { message: "Email Sent Successfully" }
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json({ error: "Method Not Allowed" }, { status: 500 });
  }
};
