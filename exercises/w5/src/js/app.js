import * as flickr from './services/flickr.service';
import FlickrPhoto from './models/FlickrPhoto.class';

let searchButton, filter, imagesList;

function loadImages(){
    let f = filter.value;
    let url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=85d944cf383ca19df759242a11be8c81&tags=${f}&format=json&nojsoncallback=1`;

    flickr.getPhotos(url).then(showImages, showError);
    
}

function showImages(response){
    //console.info(response);
    let bobHTMLBuilder = "",
        l = response.photos.photo.length;

    for(let i = 0 ; i < l ; i++){
        let o = response.photos.photo[i];
        let fPhoto = new FlickrPhoto(o.id, o.owner, o.secret, o.server, o.farm, o.title);

        bobHTMLBuilder += '<div class="images-list__media">';
        bobHTMLBuilder += `<figure><img src="${fPhoto.toUrl()}" class="images-list__media__img" /><figcaption>${fPhoto.title}</figcaption></figure>`;
        bobHTMLBuilder += '</div>';
    }

    imagesList.innerHTML = bobHTMLBuilder;
}

function showError(err){
    console.error(err);
}

function addEventListeners(){
    searchButton.addEventListener("click", loadImages); // <--- let op de s die er nu niet staat
}

function init(){

    searchButton = document.querySelector("#searchButton");
    filter = document.querySelector("#filter");
    imagesList = document.querySelector(".images-list");

    addEventListeners(); // <--- let op de extra s
}

init();

