const mongo=require("mongoose");
mongo.Promise=global.Promise;
//book schema
const registrationsschema=new mongo.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    },
});

module.exports=mongo.model('registrations',registrationsschema);