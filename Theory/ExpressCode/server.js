const express = require("express");
const app = express();
const PORT = 4545;

// Enable Body Parsing - Required for POST request
app.use(express.json());

app.get("/", (request, response) => {
    response.send("Hello Express...");
});

app.get("/info", (req, res) => {
    // req
    // - URL
    // - Params
    // - Query
    // - Body
    // - Headers

    // res
    // - send()
    // - redirect()
    // - json()
    // - status - 200, 201, 400, 404

    res.send("Info Page...");
});

// app.get("/login", (req,res) => {
//     res.send("Welcome to login page...");
// })

app.post("/login", (req, res) => {
    const data = req.body;
    console.log("Data :",data);

    res.json({
        message: "Login success...",
        receivedData: data
    })
})

// app.get("/user", (req,res) => {
//     res.json({
//         id: 1,
//         name: "John",
//         role: "Developer"
//     });
// })

// Dynamic Route
app.get("/user/:id", (req,res) => {
    res.send(`User ID is : ${req.params.id}`);
})

app.get("/success", (req, res) => {
    res.status(200).send("Request successfully executed...");
})

app.listen(PORT, () => {
    console.log(`Server running on PORT : ${PORT}`);
});