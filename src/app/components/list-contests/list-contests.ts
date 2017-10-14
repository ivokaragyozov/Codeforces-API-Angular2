import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { UsersService } from '../../services/users';

import { Contest } from '../../helpers/contest'; 

@Component({
	selector: 'list-contests',
	templateUrl: './list-contests.html',
	styleUrls: [
		'./list-contests.css'
	]
})

export class ListContestsComponent implements OnInit {
	handle: string = "";
	contests: Contest[] = [

	];

	constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute, private location: Location) {

	}

	goBack(): void {
		this.location.back();
	}

	ngOnInit(): void {
		this.activatedRoute.params
			.subscribe((params: Params) => {
				this.handle = params['handle'];
				this.usersService.getUserContests(this.handle)
					.then(res => this.contests = res.sort((c1: Contest, c2: Contest) => {
						if(c1.place > c2.place) {
							return 1;
						}
						else if(c2.place > c1.place) {
							return -1;
						}

						return 0;
					}))
			});
	}
}