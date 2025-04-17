const express = require("express");
var router = express.Router();
const auth = require("../auth.js");
const contact = require("../model/contactUs.js");
const sendEmailFromUser = require("../email/emailFromUser.js");

router.post("/", async (request, response) => {
  try {
    const { subject, content, email } = request.body;
    if (!subject || !content) {
      return response
        .status(400)
        .json({ error: "Email Id, Subject and Content are required." });
    }
    const newContact = new contact({
      subject: subject,
      content: content,
      email: email,
    });
    await newContact.save();
    const EmailContent = `  <div
        style="
            max-width: 680px;
            margin: 0 auto;
            padding: 45px 30px 60px;
            background: #f4f7ff;
            background-image: url(https://picsum.photos/800/400);
            background-repeat: no-repeat;
            background-size: 800px 452px;
            background-position: top center;
            font-size: 14px;
            color: #434343;
        "
        >
            <header>
                <div >
                <img src="https://www.redspy365.com/wp-content/uploads/2020/04/redspy365_logo-1.png" alt="" srcset="" width="200px" >
                </div>
            </header>
  
            <main>
                <div
                style="
                    margin: 0;
                    margin-top: 70px;
                    padding: 92px 30px 115px;
                    background: #ffffff;
                    border-radius: 30px;
                    text-align: center;
                "
                >
                <div style="width: 100%; max-width: 489px; margin: 0 auto;">
                    <h1
                    style="
                        margin: 0;
                        font-size: 24px;
                        font-weight: 500;
                        color: #1f1f1f;
                    "
                    >
                    </h1>
                    <p
                    style="
                        margin: 0;
                        margin-top: 17px;
                        font-size: 16px;
                        font-weight: 500;
                    "
                    >
                    <b>Dear Admin,</b>
                    </p>
                   <div
                        style="
                        margin-top: 20px;
                        background: #f9f9f9;
                        padding: 15px;
                        border-radius: 10px;
                        font-size: 14px;
                        color: #333;
                        text-align: left;
                        word-break: break-word;
                        "
                    >
                    ${content}
                </div>
                </div>
                </div>
  
                <p
                style="
                    max-width: 400px;
                    margin: 0 auto;
                    margin-top: 90px;
                    text-align: center;
                    font-weight: 500;
                    color: #8c8c8c;
                "
                >
                Need help? Ask at
                <a
                    href="mailto:help@redspy365.com"
                    style="color: #499fb6; text-decoration: none;"
                    >help@redspy365.com</a
                >
                or visit our
                <a
                    href=""
                    target="_blank"
                    style="color: #499fb6; text-decoration: none;"
                    >Help Center</a
                >
                </p>
            </main>
  
            <footer
                style="
                width: 100%;
                max-width: 490px;
                margin: 20px auto 0;
                text-align: center;
                border-top: 1px solid #e6ebf1;
                "
            >
                <p
                style="
                    margin: 0;
                    margin-top: 40px;
                    font-size: 16px;
                    font-weight: 600;
                    color: #434343;
                "
                >
                Redspy365
                </p>
                <!-- <p style="margin: 0; margin-top: 8px; color: #434343;">
                Address here.
                </p> -->
  
                <p style="margin: 0; margin-top: 16px; color: #434343;">
                Copyright © 2024 Company. All rights reserved.
                </p>
            </footer>
        </div>`;
    let receiverId = "tanishthathera@gmail.com";
    let receiverName = "tanishthathera";
    const sender = { emailId: email };
    const receiver = { email: receiverId, name: receiverName };
    sendEmailFromUser(sender, receiver, subject, EmailContent);
    response.status(200).json({
      code: 200,
      message: "Thank you for contact us our team will contact you soon",
    });
  } catch (error) {
    console.log(error);
    response.status(500).json({
      code: 500,
      message: error.message,
    });
  }
});

module.exports = router;
