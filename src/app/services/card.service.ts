import { Injectable } from '@angular/core';
import { Cardo } from '../shared/cardo';
import { CARDS } from '../shared/cards';
@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor() { } 
 
  getCards(){
	return CARDS;
  }

  addCard(){
	  tempCard =  new Cardo{"default title",
	"default content",
	 false);
	 
	 return tempCard;
  }
  
  
}
