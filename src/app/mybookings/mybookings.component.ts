import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Bookings } from '../shared/bookings.model';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.component.html',
  styleUrls: ['./mybookings.component.css']
})
export class MybookingsComponent implements OnInit {

  public books: Array<any>= [];
  public bookedPackages: Array<any>= [];

  constructor(
    public http:HttpClient,
    public session:SessionService,
    public router:Router
    ) { }

  getbookings(email:any)
  {
    return this.http.get(`http://localhost:5000/getbookings/${email}`);
  }


  ngOnInit(): void {
    let s=this.session.get(); 

    if(s==null)
    {
      alert("You Are Not Logged In.....Please Log In To Check Your Bookings.!!!!");
     this.router.navigate(['/login']);
    }else{
      console.log(s);
      this.getbookings(s).subscribe((res:any) => {
      this.books = res as Bookings[];

      for (var index1 in res) {
        //console.log(res[index1]);
        this.bookedPackages.push(res[index1]);
      } 


    });


      console.log(this.bookedPackages);
  }

  }

}
