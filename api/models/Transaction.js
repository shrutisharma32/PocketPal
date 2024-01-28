// import { Schema, model } from "mongoose";
const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const TransactionSchema = new Schema({

    name: {type: String, required:true},
    price: {type: Number, required:true},
    desc: {type: String, required:true},
    datetime: {type: String, required:true}
})

const TransactionalModel = model('Transaction', TransactionSchema);

module.exports = TransactionalModel;