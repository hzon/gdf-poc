// Import packages
const express = require("express");
const home = require("./routes/home");

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/home", home);

app.post("/test", (req, res) => {
    const userOtp = '9999';
    const dialogflowReq = JSON.parse(req.body);

    const policyNo = dialogflowReq.queryResult.parameters.policy_no;
    const otp = dialogflowReq.queryResult.parameters.policy_no;

    let newDate = new Date();
    newDate.setTime(Date.now());
    dateString = newDate.toUTCString();

    let response = '';

    if (otp === userOtp) {
        response = 'Correct otp';
    } else {
        response = 'Wrong otp';
    }

    res.json({
        "fulfillmentMessages": [
            {
                "text": {
                    "text": [
                        response
                    ]
                }
            }
        ]
    });
})

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
