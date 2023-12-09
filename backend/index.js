const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors middleware

const app = express();
const port = 4000;

app.use(cors({ 
  origin: ["*"],
  methods: ["GET", "POST", "OPTIONS", "PUT"],
  optionsSuccessStatus: 200,
  credentials: true,
  preflightContinue: true,
}));

// app.use(cors());


// Enable CORS for all routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

app.get('/about', (req, res) => {
  res.send('This is my about route..... ')
})


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "theweekendcodershq@gmail.com", // Replace with your email
    pass: "rosx dtbc lage jmvh", // Replace with your email password or use an app-specific password
  },
});

// Define your email templates
// const createCustomerEmail = (formData) => {
//   // Implement your customer email template
//   return `
//     Thank you for contacting us ${formData.name}!

//     Our team will get back to you soon.
//   `;
// };

const createAdminEmail = (formData) => {
  // Implement your admin email template
  return `
      New form submission:
  
      Name: ${formData.name}
      Email: ${formData.email}
      Selected Services: ${formData.selectedServices.join(", ")}
      Phone Number: ${formData.number}
      Requirement: ${formData.requirement}
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
        .logo {
          width: 300px;
          display: block;
        }
        .poster {
          margin-top: 20px;
          object-fit: cover;
          width: 620px;
          height: 395px;
          border-radius: 25px;
        }
        .content {
          max-width: 620px;
          text-align: justify;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <img class="logo" src="cid:companyLogo" alt="Company Logo" />
        <img class="poster" src="cid:poster" alt="Poster" style="height: 395px;" />
        <p>Dear Client,</p>
        <p class="content">
          Thank you for reaching out to us! We have received your inquiry and are
          excited to learn more about your project. <br><br>
          Our team is currently reviewing
          the details you provided, and we will get back to you as soon as possible.
          If we have any additional questions or need further clarification, we will
          reach out to you promptly. <br><br>
          We appreciate your interest in working with us
          and look forward to the opportunity to collaborate on your project. <br><br>
          If you have any urgent questions or if there's anything else you'd like to share,
          please don't hesitate to contact us directly to this email or call
          us. <br><br>
          Thank you again for considering <b>theweekendcoders</b>. We value your trust
          and confidence. <br><br>
          Best regards,<br><br>
          Mahesh Kumar, <br>
          Team at TWC,<br>
          theweekendcoders,<br>
          9789260864.
          
        </p>
      </div>
    </body>
  </html>
  
  `;

app._router.stack.forEach((middleware) => {
    if (middleware.route) {
        console.log("Registered route:", middleware.route.path);
    }
});

app.options('*', function (req,res) { res.sendStatus(200); });
// Define route for form submission
app.post("/submit-form", (req, res) => {
  // res.setHeader("Access-Control-Allow-Origin", "*");
  // res.setHeader("Access-Control-Allow-Methods", "POST");
  // res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // // Check if it's a preflight request
  // if (req.method === "OPTIONS") {
  //   res.status(200); // Respond OK for preflight requests
  //   return;
  // }


  const formData = req.body;

  // Send acknowledgment email to the customer
  const customerMailOptions = {
    from: "theweekendcodershq@gmail.com", // Replace with your email
    to: formData.email,
    subject: `Thank you for contacting us ${formData.name}`,
    html: emailTemplate,
    attachments: [
      {
        filename: "logo.jpg",
        path: "./logo.jpg",
        cid: "companyLogo",
      },
      {
        filename: "email-image.jpg",
        path: "./email-image.jpg",
        cid: "poster",
      },
    ],
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
    text: createAdminEmail(formData),
  };

  transporter.sendMail(adminMailOptions, (error) => {
    if (error) {
      console.error("Error sending form submission email to the admin:", error);
      res.status(500).send("Internal Server Error");
    } else {
      console.log("Form submission email sent to the admin");
      res.status(200).send("Form submitted successfully");
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
