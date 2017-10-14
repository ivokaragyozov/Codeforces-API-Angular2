import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing';

import { AppComponent } from '../components/app/app';
import { SearchUserComponent } from '../components/search-user/search-user';
import { ListContestsComponent } from '../components/list-contests/list-contests';

import { UsersService } from '../services/users';

@NgModule({
	imports: [ 
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		HttpModule
	],
	declarations: [
		AppComponent, 
		SearchUserComponent,
		ListContestsComponent
	],
	bootstrap: [
		AppComponent
	],
	providers: [
		UsersService
	]
})

export class AppModule {

}
