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

    res.send(dialogflowReq);

    const policyNo = dialogflowReq.queryResult.parameters.policy_no;
    const otp = dialogflowReq.queryResult.parameters.otp;

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

app.get("/test", (req, res) => {
    const userOtp = '9999';
    const dialogflowReq = "{\"responseId\":\"054ab2fc-2f77-404f-b872-9c9ae9239758-c4fd3c84\",\"queryResult\":{\"queryText\":\"loremipsumab123459999\",\"parameters\":{\"policy_no\":\"ab12345\",\"otp\":\"9999\"},\"allRequiredParamsPresent\":true,\"outputContexts\":[{\"name\":\"projects/sunshine-uxpm/agent/sessions/e96d4eea-87da-eccc-0c08-96eb5bbd6749/contexts/__system_counters__\",\"parameters\":{\"no-input\":0,\"no-match\":0,\"policy_no\":\"ab12345\",\"policy_no.original\":\"ab12345\",\"otp\":\"9999\",\"otp.original\":\"9999\"}}],\"intent\":{\"name\":\"projects/sunshine-uxpm/agent/intents/9661b4ca-3545-40fd-b053-602b9ab4b21f\",\"displayName\":\"Test\"},\"intentDetectionConfidence\":1,\"languageCode\":\"en\",\"sentimentAnalysisResult\":{\"queryTextSentiment\":{\"score\":0.4,\"magnitude\":0.4}}},\"originalDetectIntentRequest\":{\"source\":\"DIALOGFLOW_CONSOLE\",\"payload\":{}},\"session\":\"projects/sunshine-uxpm/agent/sessions/e96d4eea-87da-eccc-0c08-96eb5bbd6749\"}";

    const policyNo = dialogflowReq.queryResult.parameters.policy_no;
    const otp = dialogflowReq.queryResult.parameters.otp;

    let newDate = new Date();
    newDate.setTime(Date.now());
    dateString = newDate.toUTCString();

    let response = '';

    if (otp === userOtp) {
        response = 'Correct otp';
    } else {
        response = 'Wrong otp';
    }

    res.json(response);

    // res.json({
    //     "fulfillmentMessages": [
    //         {
    //             "text": {
    //                 "text": [
    //                     response
    //                 ]
    //             }
    //         }
    //     ]
    // });
})

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
