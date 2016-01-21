import {Component, View} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {PgcComponent} from './pgc/pgc.component';

@Component({
	selector: 'app',
	providers: [
		ROUTER_PROVIDERS
	]
})
@View({
	directives: [ROUTER_DIRECTIVES],
	template: `
			<div>
				<router-outlet></router-outlet>
			<div>
	`
})
@RouteConfig([
	{ path: '/pgc', name: 'Pgc', component: PgcComponent, useAsDefault: true }
])
export class AppComponent {
	/**
	 * This is a doc comment for `title`.
	 * @example This is a caption.
	 * ```ts
	 * var world: String = 'world';
	 * var hello: String = 'Hello ' + world;
	 * console.log(hello);
	 * ```
	 * @deprecated This is an example of the `deprecated` annotation tag.
	 */
	public title = 'PGC';
}
