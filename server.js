const express = require('express');
const app = express();
const cors = require("cors");

const port = process.env.PORT || 5000;


//this bit of config enables our express app to read incoming data payloads
//via our routes - the user data we pass in via the fetch call in the login compnent
//we can yse a JSON encoded object or URL parameters or form data to pass our user data in

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.send("API is running");
});
app.use("/ums", require('./routes/api'));

app.listen(port, () => {
    console.log(`ums is running at port ${port}`);
}

)
