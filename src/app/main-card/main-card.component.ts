import { Component, OnInit } from '@angular/core';
import { Cardo } from '../shared/cardo';
@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
})
export class MainCardComponent implements OnInit {
		
		title = "card Title",
		content = "card content"
		
	
  constructor() { }

  ngOnInit() {
  }

}
