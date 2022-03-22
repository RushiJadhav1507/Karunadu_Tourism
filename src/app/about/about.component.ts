import { Component, OnInit } from '@angular/core';
import { SubscribeService } from '../subscribe.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private ser:SubscribeService) { }

  ngOnInit(): void {
  }
  Subscribe(){
    this.ser.subscribeFromService();

  }
  

}
