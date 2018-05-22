import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
})
export class MainCardComponent implements OnInit {
	cardTitle = "card Title"
	cardContent = "card Content"
  constructor() { }

  ngOnInit() {
  }

}
