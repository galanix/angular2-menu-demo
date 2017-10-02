import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SearchService {
  	constructor(private _http: Http) { }

  	message: string = "Nothing found";

  	makeRequest(searchTerm) {
  		return (this._http
  			.get('https://davids-restaurant.herokuapp.com/menu_items.json')
  			.map((response) => response.json())
  			.toPromise())
  			.then((result) => {
	  			var foundItems = [];

	  			for (let i = 0; i < result['menu_items'].length; i++) {
	  				if (result['menu_items'][i].description.indexOf(searchTerm) !== -1) {
	  					foundItems.push(result['menu_items'][i])
	  				}
	  			}

	  			return foundItems;
	  		})
	  		.catch((error) => console.error(error));
  	}
}
