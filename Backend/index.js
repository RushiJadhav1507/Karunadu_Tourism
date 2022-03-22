const mongo=require('mongoose');

const express = require('express');

const bodyParser = require('body-parser');
//const { ɵangular_packages_core_core_ba } = require('@angular/core');

//const cors=require('cors');

require('dotenv').config({path:'.env'});

const app = express();

mongo.connect(process.env.DATABASE,{
    useUnifiedTopology:true,
    useNewUrlParser:true
});

mongo.Promise=global.Promise;
mongo.connection.on('error',(err)=>{
    console.log(`Karunadu Database Connection error->${err.message}`);
});

require('./Models/bookings');
require('./Models/registrations');

//const application=require('./app');

const bookingController=require('./Controllers/BookingController');
const registrationsController=require('./Controllers/RegistrationsController');

const Packages = [
    {
        id:1, Place:'CHIKKAMAGALURU FALLS', Duration:'8 Days', Price:'Rs. 5000 Per Person',Start_Date:'25 Nov 2021'
    },
    {
        id:2, Place:'UTTAR KARNATAKA', Duration:'14 Days', Price:'Rs. 10000 Per Person',Start_Date:'30 Nov 2021'
    },
    {
        id:3, Place:'HAMPI', Duration:'10 Days', Price:'Rs. 8000 Per Person',Start_Date:'10 Dec 2021'
    },
    {
        id:4, Place:'SHIMOGGA', Duration:'15 Days', Price:'Rs. 3000 Per Person',Start_Date:'5 Dec 2021'
    },
    {
        id:5, Place:'MYSORE PALACE', Duration:'18 Days', Price:'Rs. 6500 Per Person',Start_Date:'26 Dec 2021'
    },
    {
        id:6, Place:'COORG', Duration:'8 Days', Price:'Rs. 6000 Per Person',Start_Date:'17 Dec 2021'
    },
    {
        id:7, Place:'Sri Kshetra Shringeri', Duration:'12 Days', Price:'Rs. 5000 Per Person',Start_Date:'2 Jan 2022'
    },
    {
        id:8, Place:'Pattadakal', Duration:'10 Days', Price:'Rs. 4500 Per Person',Start_Date:'20 Dec 2021'
    },
    {
        id:9, Place:'Sirimane Falls', Duration:'15 Days', Price:'Rs. 5500 Per Person',Start_Date:'15 Dec 2021'
    },
    {
        id:10, Place:'Kalasa', Duration:'6 Days', Price:'Rs. 7000 Per Person',Start_Date:'7 Dec 2021'
    },
    {
        id:11, Place:'Horanadu', Duration:'10 Days', Price:'Rs. 4000 Per Person',Start_Date:'19 Dec 2021'
    },
    {
        id:12, Place:'Kudremukha', Duration:'14 Days', Price:'Rs. 6000 Per Person',Start_Date:'27 Dec 2021'
    },
]
    


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

// CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
  });


  app.post('/insert',bookingController.addbook);
  app.post('/adduser',registrationsController.adduser);


  app.get('/Packages', function (req, res) {
    res.send(Packages);
  });

  app.get('/getuser',registrationsController.getuserdata)

  app.param('Place', function(req, res, next, Place) {
    const modified = Place;
    req.Place = modified;
    next();
  });


  app.get('/Packages/:Place', function(req, res) {
  
    const Place = req.Place;
    console.log(Place)
    index = Packages.findIndex(x => x.Place ===Place);
    console.log(index);
    const Price = Packages[index].Price;
    const Duration = Packages[index].Duration;
    const Start_Date = Packages[index].Start_Date;

  
    res.send([
      Place,
      Duration,
      Price,
      Start_Date  
    

    ]);
      
});

app.get('/',(req,res)=>{

    res.send('Welcome to Karunadu Tourism');

});

app.listen(5000, function () {
    console.log('Example app listening on port 3000!')
  })


/*
const Joi = require('joi');
app.use(express.json());
app.use(cors({origin:'http://localhost:4200'}));

app.get('/Packages/:place',function(req,res)
{
    const package=Packages.find(c=>c.Place===(req.params.place));
    if(!package) res.status(404).send('Error!!!! Can not find the package');
    res.send(package)
});
*/

/*
app.param('Place', function(req, res, next, Place) {
    const modified = Place;
  
    req.Place = modified;
    next();
  });


app.get('/Packages/:Place', function(req, res) 
{
    const Place = req.Place;
    console.log(Place)
    index = Packages.findIndex(x => x.Place ===Place);
    console.log(index);
    const Price=Packages[index].Price;
    const Duration = Packages[index].Duration;


  
    res.send({
      'Place': Place,
      'Duration': Duration,
      'Price': Price,
    });

    
});*/



