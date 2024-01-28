const express = require('express');
const cors = require('cors');
// require('dotenv').config();
const Transaction = require('./models/Transaction.js');
const { default: mongoose } = require('mongoose');
// import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/test", (req, res)=>{
    res.json('test OK')
})
app.post("/api/transaction", async (req, res)=>{
    await mongoose.connect("mongodb+srv://shrutisharma3204:Sh73h61N1S5MY2RA@cluster0.gurimww.mongodb.net/?retryWrites=true&w=majority");
    const{name, price, desc, datetime} = req.body;
    const transaction = await Transaction.create({name, price, desc, datetime});
    res.json(transaction);
})
app.get("/api/transactions", async (req, res)=>{
    await mongoose.connect("mongodb+srv://shrutisharma3204:Sh73h61N1S5MY2RA@cluster0.gurimww.mongodb.net/?retryWrites=true&w=majority");
    const transactions = await Transaction.find();
    res.json(transactions)
})
app.listen(4000, (err)=>{
    console.log("Post running successfully");
})