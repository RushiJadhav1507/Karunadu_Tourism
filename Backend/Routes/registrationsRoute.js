const express=require('express');
const router=express.Router();

const registrationsController=require('../Controllers/RegistrationsController');

router.get('/',registrationsController.baseRoute);

router.get('/getbooks',registrationsController.getbooks);

router.get('/getbooks/:id',registrationsController.getsinglebook);

router.post('/insert',registrationsController.addbook);

router.post('/adduser',registrationsController.adduser);

router.get('/getbooks/:id',registrationsController.getsinglebook);

// update
router.put('/book/:id/update',registrationsController.updateBook);

// delete
router.delete('/delete/:id',registrationsController.deleteBook);

module.exports=router;