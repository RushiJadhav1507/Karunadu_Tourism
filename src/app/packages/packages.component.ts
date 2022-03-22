import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  readonly baseURL = 'http://localhost:5000/api/login';

  constructor(
    public http:HttpClient,
    public session:SessionService,
    public router:Router
  ) { }

  ngOnInit(): void {
  }

  check()
{
  let stat=this.session.get()
  if(stat==null)
  {
    alert('You Are Not Logged In...Log In To Book Package!!');
    this.router.navigate(['/login']);
  }
  else
  {
   
  }
}

}
