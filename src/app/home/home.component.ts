import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { SubscribeService } from '../subscribe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ser:SubscribeService) { }

  ngOnInit(): void {
  }
    Subscribe(){
      this.ser.subscribeFromService();

    }
  

}
