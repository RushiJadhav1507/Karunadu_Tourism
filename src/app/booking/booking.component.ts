import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ArrayType } from '@angular/compiler';
import {Bookings} from '../shared/bookings.model';
import { EmailValidator,NgForm } from '@angular/forms';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

let packages:any;
declare var M: any;

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  readonly baseURL = 'http://localhost:5000/insert';

  public packages:Array<any>=[];
  
  selectedFl!: Bookings;

  showMe:boolean=false;
  

  constructor(
    public http:HttpClient,
    public session:SessionService,
    public router:Router
    ) { }

  ngOnInit(): void {
  }

  
getData()
{
            this.packages=[];
            let place=(document.getElementById("input-box") as HTMLSelectElement).value

            this.http.get(`http://localhost:5000/packages/${place}`).subscribe((data:any)=>{
              console.log(data);
              
                
              for (var index1 in data) {
                console.log(data[index1]);
                this.packages.push(data[index1]);
              }  
          });

    this.showMe=!this.showMe
}

bookPackage(fl:Bookings)
{
  return this.http.post(this.baseURL,fl);
}


booking()
{
    let email=this.session.get();
    if(email==null)
    {
      alert('You Are Not Logged In..Please Login to your Account Before Booking Package!!!');
      this.router.navigate(['/login']);
    }
    else{
    console.log(email);
    let package_id= (document.getElementById("Package_Id") as HTMLSelectElement).value
    let place= (document.getElementById("Place") as HTMLSelectElement).value
    let duration= (document.getElementById("Duration") as HTMLSelectElement).value
    let price= (document.getElementById("Price") as HTMLSelectElement).value
    let start_date= (document.getElementById("Start_Date") as HTMLSelectElement).value
    let total_people= (document.getElementById("Total_People") as HTMLSelectElement).value


    let book=({
      Email:email,
      Package_Id:package_id,
      Place:place,
      Duration:duration,
      Price:price,
      Start_Date:start_date,
      Total_People:total_people

      });

      this.bookPackage(book).subscribe((res) => {
        alert("Your Package is Booked Successfully!!!");
        //window.location.reload();
        this.router.navigate(['/mybookings']);
      });

   }
  }
}