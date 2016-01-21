import {Injectable} from 'angular2/core';

@Injectable()
export class IoService {
	private io: any;

	constructor() {
		this.io = io.connect('http://localhost:8080');
	}

	public getIo() {
		return this.io;
	}
}
