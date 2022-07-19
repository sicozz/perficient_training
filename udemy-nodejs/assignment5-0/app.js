/*
- Create an npm project and install Express.js
- Funnel the request through 2 middleware functions that log something to the
consoleand return one response
- Handle requests to "/" and "/users" such that each request only has one
handler/middleware that does something with it
 */
const express = require('express');

const app = express();

app.use("/users", (req, res, next) => {
    console.log("user");
    res.send("God user");
})
app.use("/", (req, res, next) => {
    console.log("root");
    res.send("God root");
});

app.listen(3000);