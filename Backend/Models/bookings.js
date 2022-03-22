const mongo=require("mongoose");
mongo.Promise=global.Promise;

//booking schema
const bookingsschema=new mongo.Schema({
    Email:{
        type:String
    },
    Package_Id:{
        type:String
    },
    Place:{
        type:String
    },
    Duration:{
        type:String
    },
    Price:{
        type:String
    },
    Start_Date:{
		type:String
	},
    Total_People:{
		type:String
	},
	
});

module.exports=mongo.model('bookings',bookingsschema);