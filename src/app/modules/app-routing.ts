import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchUserComponent } from '../components/search-user/search-user';
import { ListContestsComponent } from '../components/list-contests/list-contests';

const routes = [{
		path: '',
		redirectTo: 'search-user',
		pathMatch: 'full'
	}, {
		path: 'search-user',
		component: SearchUserComponent
	}, {
		path: 'list-contests/:handle',
		component: ListContestsComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})

export class AppRoutingModule {

}