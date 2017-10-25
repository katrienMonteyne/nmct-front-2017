
import Media from './Media.class';

export default class FlickrPhoto extends Media{

    constructor(id, owner, secret, server, farm, title){
        super();

        this.id = id;
        this.owner = owner;
        this.secret = secret;
        this.server = server;
        this.farm = farm;
        this.title = title;
    }

    toUrl(){
        return `https://farm${this.farm}.staticflickr.com/${this.server}/${this.id}_${this.secret}.jpg`;
    }
}