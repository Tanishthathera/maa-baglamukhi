const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    subject:{
        type: String,
        require:true
    },
    content:{
        type: String,
        require:true
    },
    email:{
        type: String,
        require:true
    }
}, {timestamps: true})

module.exports = mongoose.model("contact",contactSchema);
