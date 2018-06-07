export class Cardo {
	title : string;
	content : string;
	selected : boolean;
	
	constructor(newTitle: string, newContent: string, newSelected: boolean){
		this.title = newTitle;
		this.content = newContent;
		this.selected = newSelected;
	}
	/*
	changeTitle(nString: string ){
		this.title = nString;
	}
	changeContent(nString: string ){
		this.content = nString;
	}
	changeSelected(nBool: boolean ){
		this.selected = nBool;
	}
*/	
}
