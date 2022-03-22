import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Registrations } from '../shared/registrations.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  readonly baseURL = 'http://localhost:5000/adduser';

  constructor(public http:HttpClient) { }

  ngOnInit(): void {
  }

  signup(us:Registrations)
  {
    return this.http.post(this.baseURL,us); 
  }


  useraddition()
  {
    let email= (document.getElementById("exampleInputEmail1") as HTMLSelectElement).value
    let password= (document.getElementById("exampleInputPassword1") as HTMLSelectElement).value
    console.log(email+""+password);
    let user=({
      email:email,
      password:password,
   });
   this.signup(user).subscribe((res) => {

            alert(email+" Signed Up Successfully!!!"); 
    
     });

  }


}
