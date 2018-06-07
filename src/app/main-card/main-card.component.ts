import { Component, OnInit } from '@angular/core';
import { Cardo } from '../shared/cardo';

import { CardService} from '../services/card.service';


@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
})
export class MainCardComponent implements OnInit {
		cards : Cardo[];
		
		
		selectedCard: Cardo;
		
		onSelect(card1 : Cardo){
			this.selectedCard = card1;
		}
	
  constructor(private cardService: CardService) { }

  ngOnInit() {

	  this.cards = this.cardService.getCards();
  }

}
