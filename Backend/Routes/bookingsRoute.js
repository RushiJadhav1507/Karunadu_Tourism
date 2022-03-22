const express=require('express');
const router=express.Router();

const BookingsController=require('../Controllers/BookingsController');
const RegistrationsController=require('../Controllers/RegistrationsController')

router.post('/insert',BookingsController.addbook);
router.post('/adduser',RegistrationsController.adduser);
//router.get('/getuser/:email',RegistrationsController.getuserdata);
router.get('/Packages/:Place', BookingsController.getsinglebook);


module.exports=router;