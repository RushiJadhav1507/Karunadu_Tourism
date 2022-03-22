import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor(private http:HttpClient) { }
    subscribeFromService()
    {
      alert("you have subscribed from service.ts file");
    }

   
  
}
