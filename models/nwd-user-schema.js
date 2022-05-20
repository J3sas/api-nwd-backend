    const mongoose = require("mongoose");
    const Schema = mongoose.Schema;


    const userSchema = new Schema({
        namee : {
            type : String,
            required : true
        },
        address : {
            type :String,
            required : true
        }
    });
    const User = mongoose.model("nwdUsers",userSchema); // table name should be small letters
    module.exports = User;