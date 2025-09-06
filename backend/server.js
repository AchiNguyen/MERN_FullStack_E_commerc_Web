import express from "express";
import dotenv from "dotenv";
import path from "path";

import { connectDB } from './config/db.js';
// 
// import mongoose from "mongoose";

import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json()); //allows us to accep JSON data in the req.body

app.use("/api/products", productRoutes); 
//use method imported from "./routes/product.route.js"
//append /api/products  for API calls

//Postman desktop app

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname,"/frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
         
    });
}

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
 
});

//bxoNn6SnO7qbO4RM


// AI app that looks at google search and assembles a website dynamically to fit user's questions/"exact term they are looking for.  For example: Top 10 Quentin Tarantino Movies", IMDB will create a page/summary/or prompt AI chat agents. Think of Jarvis when you ask him to ask something. He gives you a search and a summary. Doesn't Google already have that? Yeah IDMB don't, neither do Amazon, or Netflix, or You Tube. Google would want to buy this

