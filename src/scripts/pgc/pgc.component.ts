import {Component, View} from 'angular2/core';
import {NgFor} from 'angular2/common';

import {IoService} from '../shared/services/io.service';

@Component({
	selector: 'pgc'
})
@View({
	directives: [NgFor],
	template: `
		<div class="row">
			<div class=".col-xs-6">Users</div>
			<div class=".col-xs-6">
				<ul>
					<li *ngFor="#user of users">{{ user.name }}</li>
				</ul>
			</div>
		</div>
	`
})
export class PgcComponent {
	private io: any;
	private users: Array<Object> = [];

	constructor(private ioService: IoService) {
		// get the socket
		this.io = ioService.getIo();

		// when current user gets connected
		this.io.on('init', (users: any) => {
			// get the list of users already here
			this.users = users;
		});

		// when a new user gets connected
		this.io.on('user-connected', (user: any) => {
			// add the user to the users list
			this.users.push(user);
		});

		// when a user gets disconnected
		this.io.on('user-disconnected', (user: any) => {
				// remove the user from users list
			_.remove(this.users, (u: any) => {
				return u.id === user.id;
			});
		});
	}
}
