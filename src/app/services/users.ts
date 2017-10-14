import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Contest } from '../helpers/contest';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsersService {
	baseUrl: string = "http://codeforces.com/api/user.rating";

	constructor(private http: Http) {

	}

	handleError(err: any): Promise<any> {
		console.log('An error occured', err);
		return Promise.reject(err.message || err);
	}

	parseContests(data: any): Contest[] {
		let contests: Contest[] = [

		];

		for(let contest of data) {
			contests.push({
				place: contest.rank,
				contestId: contest.contestId,
				contestName: contest.contestName,
				ratingChange: contest.newRating - contest.oldRating;
			});
		}

		return contests;
	}

	getUserContests(handle: string): Promise<Contest[]> {
		let url = "https://cors-anywhere.herokuapp.com/" + this.baseUrl + '?handle=' + handle;
		return this.http.get(url)
			.toPromise()
			.then(res => this.parseContests(JSON.parse(res._body).result))
			.catch(err => this.handleError(err));
	}
}