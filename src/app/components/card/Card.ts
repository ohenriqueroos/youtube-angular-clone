import * as uuid from 'uuid';

export class Card {
    id: string = uuid.v4();
    image: string = '';
    title: string = '';
    nameChannel: string = '';
    imageChannel: string = '';
    views: string = '';
    days: string = '';
}
