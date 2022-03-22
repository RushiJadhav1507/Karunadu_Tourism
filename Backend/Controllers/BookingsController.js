const mongo=require("mongoose");


const Bookings=mongo.model('bookings');


exports.baseRoute= async(req,res)=>{
    res.send('Server Running Fine.....');
}

exports.getbooks= async(req,res)=>{
        const book=await Books.find();
        res.json(book);
    }
exports.addbook= async(req,res)=>{
   let book=({
     Email:req.body.Email,
     Package_Id:req.body.Package_Id,
     Place:req.body.Place,
     Duration:req.body.Duration,
     Price:req.body.Price,
     Start_Date:req.body.Start_Date,
     Total_People:req.body.Total_People,

   });
    await new Bookings(book).save((err,data)=>{
        if(err){
            res.status(500).json({
                message:"Something went wrong,please try again later.",
            });
        }
        else{
			 res.send(data);
            /*res.status(200).json({
                message:"Book is inserted",
               
            });*/
        }
    });
}



exports.getsinglebook=async(req,res)=>{
    let book_id=req.params.Place;
	  //let book_id1=req.params.destination;
    await Bookings.findById({_source:book_id},(err,data)=>{
        if(err){
            res.status(500).json({
                message:"Error! booking not found",
            });

        }else{
            console.log(data);
            res.status(200).json({
                message:"Booking found",
                data
            });
        }
    });
}
exports.updateBook = async (req, res) => {
    // get a postID.
    let book_ID = req.params.id;
  
    // we will use findByIdAndUpdate function : findByIdAndUpdate(id, data, callback)
    await Books.findByIdAndUpdate({_id: book_ID}, {$set : req.body}, (err, data) => {
      if (err) {
        res.status(500).json({
          message:
            "Something went wrong, please try again later.",
        });
      } else {
        res.status(200).json({
          message: "book Updated",
          data,
        });
      }
    });
  }
  
  // function to delete a post from the DB
  exports.deleteBook = async (req, res) => {
    let book_id = req.params.id;
    // we use mongodb's deleteOne() functionality here
    await Books.deleteOne({ _id: req.params.id }, (err, data) => {
      if (err) {
        res.status(500).json({
          message:
            "Something went wrong, please try again later.",
        });
      } else {
        res.status(200).json({
          message: "book Deleted"
        });
      }
    });
  };
