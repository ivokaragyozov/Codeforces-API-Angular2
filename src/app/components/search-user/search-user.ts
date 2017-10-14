import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
	selector: 'search-user',
	templateUrl: './search-user.html',
	styleUrls: [ 
		'./search-user.css'
	]
})

export class SearchUserComponent {
	handle: string;

	constructor(private router: Router) {

	}

	searchUser(): void {
		this.router.navigate(['list-contests', this.handle]);
	}
}