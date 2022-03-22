import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Registrations } from '../shared/registrations.model';
import { AuthService } from '../auth.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public users: Array<any>= [];
  public userdata: Array<any>= [];

  readonly baseURL = 'http://localhost:5000/api/login';

  postId:any;
  getId:any;

  constructor(
    public http:HttpClient, 
    public router:Router,
    public session:SessionService
    ) { }

  ngOnInit(): void {

    let stat=this.session.get()
    if(stat==null)
    {

    }
    else
    {
      alert('You Are Already Logged In.');
      this.router.navigate(['/home']);
    }
  }

  signup(us:Registrations)
  {
    return this.http.post(this.baseURL,us);
    
  }

  loginuser()
  {
    let email= (document.getElementById("exampleInputEmail1") as HTMLSelectElement).value
    let password= (document.getElementById("exampleInputPassword1") as HTMLSelectElement).value
    let user=({
      email:email,
      password:password,
   });
   this.signup(user).subscribe((res) => {
        console.log(user);
        this.postId=res;
        this.getId=user;
        let s=this.postId['email'];
        let si=this.getId['email'];
        let p=this.postId['password'];
        let pi=this.getId['password'];
        if(s==si && p==pi)
        {
          console.log("Login Successful!!");
          this.session.save(s);
          alert(s+"  Login Successful!!");
          //this.router.navigate(['/home']);
          
        }else if(s=='')
        {
          alert("Please Enter Valid Email Address!! Please Check Again..");
        }
        else{
          alert("Wrong Username or Password!! Please Check Again..");
        }

     });
  }

}


