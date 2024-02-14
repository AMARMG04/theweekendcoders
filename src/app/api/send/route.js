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
          pass: "fjbb cldz mzll ahzq", // Replace with your email password or use an app-specific password
          
        },
      });

      const createAdminEmail = () => {
        // Implement your admin email template
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
          Mahesh Kumar, <br>
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

      transporter.sendMail(customerMailOptions, (error) => {
        if (error) {
          console.error(
            "Error sending acknowledgment email to the customer:",
            error
          );
        } else {
          console.log("Acknowledgment email sent to the customer");
        }
      });

      // Send form submission email to the admin
      const adminMailOptions = {
        from: "theweekendcodershq@gmail.com", // Replace with your email
        to: "theweekendcodershq@gmail.com", // Replace with admin email
        subject: "New Form Submission",
        text: createAdminEmail(),
      };

      transporter.sendMail(adminMailOptions, (error) => {
        if (error) {
          console.error(
            "Error sending form submission email to the admin:",
            error
          );
          res.status(500).send("Internal Server Error");
          // return NextResponse.json(
          //   { error: "Internal Server Error", status: 500 }
          // );
        } else {
          console.log("Form submission email sent to the admin");
          res.status(200).send("Form submitted successfully");
          // return NextResponse.json(
          //   { message: "Form submitted successfully", status: 200 }
          // );
        }
      });

      return NextResponse.json(
        {
          status: 200,
        },
        {
          message: "Email Sent Successfully",
        }
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
