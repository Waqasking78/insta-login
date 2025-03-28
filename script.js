const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true })); // Parses form data
app.use(express.json()); // Parses JSON data

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    console.log(req.body)
    if (username && password) {
        res.send("Thankyou for login!");
    } else {
        res.send("Invalid credentials!");
    }
    });
app.listen(3000);
