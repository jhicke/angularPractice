import { Component, OnInit } from '@angular/core';
import { Cardo } from '../shared/cardo';

const CARDS: Cardo[] = [
			{
				title: 'card title',
				content: 'card content',
				selected: 0
				
			},
			{
				title: 'card title',
				content: 'card content',
				selected: 0
			},
			{
				title: 'card title',
				content: 'card content',
				selected: 0
			},
			{
				title: 'card title',
				content: 'card content',
				selected: 0
			},
			{
				title: 'card title',
				content: 'card content',
				selected: 0
			},
			{
				title: 'card title',
				content: 'card content',
				selected: 0
			},
			{
				title: 'card title',
				content: 'card content',
				selected: 0
			},
			{
				title: 'card title',
				content: 'card content',
				selected: 0
			},
			{
				title: 'card title',
				content: 'card content',
				selected: 0
			},
			{
				title: 'card title',
				content: 'card content ',
				selected: 0
			}
		]


@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
})
export class MainCardComponent implements OnInit {
		cards = CARDS;
		
		selectedCard=CARDS[0];
		
		onClickMe()
		{
			if(this.selected ==0){
				this.selected =1;
			}else{
				this.selected =1;
			}
			
		}
	
  constructor() { }

  ngOnInit() {
  }

}
