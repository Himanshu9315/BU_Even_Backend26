const express = require("express");
const app = express();
const PORT = 4545;

const PRODUCTS = [
    {
        p_id: 101, p_name: "Apple IPhone 17", p_price:78000, p_category: "Mobile"
    },
    {
        p_id: 102, p_name: "Apple IPhone 17 pro", p_price:128000, p_category: "Mobile"
    },
    {
        p_id: 103, p_name: "Samsung Galaxy S25", p_price:108000, p_category: "Mobile"
    },
    {
        p_id: 104, p_name: "LG TV", p_price:78000, p_category: "TV"
    },
    {
        p_id: 105, p_name: "Hitachi AC", p_price:50000, p_category: "Electronics"
    },
    {
        p_id: 106, p_name: "Apple IPad", p_price:55000, p_category: "Electronics"
    }
]

app.get("/search", (req, res) => {
    const query = req.query.name.toLowerCase();
    const matchingProducts = PRODUCTS.filter(product => product.p_name.toLowerCase().includes(query));
    res.json(matchingProducts);
});

// Serve static files from public directory
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log("Server is running on PORT :",PORT);
})