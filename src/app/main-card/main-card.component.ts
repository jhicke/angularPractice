import { Component, OnInit } from '@angular/core';
import { Cardo } from '../shared/cardo';
import { CARDS} from '../shared/cards';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
})
export class MainCardComponent implements OnInit {
		cards = CARDS;
		
		selectedCard: Cardo;
		
		onSelect(card1 : Cardo){
			this.selectedCard = card1;
		}
	
  constructor() { }

  ngOnInit() {
  }

}
