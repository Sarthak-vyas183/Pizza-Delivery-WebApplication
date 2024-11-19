import express  from "express";
const app = express()

app.get("/", (req, res) => {
    res.send("welcome to pizza hub");
})

export default app;