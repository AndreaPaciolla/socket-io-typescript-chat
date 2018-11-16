import {User} from './user';

export class Message {
    constructor(public room: number, private from: User, private content: string) {}
}