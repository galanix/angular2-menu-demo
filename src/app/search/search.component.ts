import { Component, OnInit } from '@angular/core';
import { SearchService } from './../search.service';

@Component({
	moduleId: module.id,
  	selector: 'app-search',
  	templateUrl: 'search.component.html',
  	styleUrls: ['search.component.css']
})

export class SearchComponent implements OnInit {

  	constructor(private search: SearchService) { }

  	itemsPrimaryList: any[];
  	itemsFiltered: any;
  	searchTerm: any;
  	message: string = "";


  	filterItems() {
  		this.search.makeRequest(this.searchTerm).then(
  			result => {
  				if (result[0] === undefined) {
  					this.message = "Nothing found";
  				} else {
  					this.message = "";
  				}
  				this.itemsFiltered = result;
  			}
  		).catch((error) => console.error(error));
  	}

  	removeItem(id) {
  		this.itemsFiltered.splice(id, 1);
  		if (this.itemsFiltered.length === 0) {
  			this.message = "Nothing found"
  		}
  	}

  	ngOnInit() { }

}
