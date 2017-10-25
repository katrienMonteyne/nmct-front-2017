import * as flickr from './services/flickr.service';
import FlickrPhoto from './models/FlickrPhoto';

var searchButton, filter, imagesList;

function renderImages(images){
    var bobTheHTMLBuilder = "",
        l = images.photos.photo.length;

    for(var i = 0 ; i < l ; i++){
        var o = images.photos.photo[i];
        var fphoto = new FlickrPhoto(o.id,o.owner,o.secret, o.server,o.farm);


        bobTheHTMLBuilder += '<div class="images-list__media">';
        bobTheHTMLBuilder += '<figure><img src="'+fphoto.toUrl()+'" class="images-list__img" /><figcaption>'+fphoto.id+'</figcaption></figure>'
        bobTheHTMLBuilder += '</div>';
    }

    imagesList.innerHTML = bobTheHTMLBuilder;
}

function parseUrl(flickrObject){
    return "https://farm"+flickrObject.farm+".staticflickr.com/"+flickrObject.server+"/"+flickrObject.id+"_"+flickrObject.secret+".jpg";
}

function handleError(error){
    console.error(error);
}

function loadImages(){
    var searchText = filter.value;
   
    var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=5fb2d2f6cb263615ea7e383ea5205168&tags="+searchText+"&format=json&nojsoncallback=1";
//https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=5fb2d2f6cb263615ea7e383ea5205168&tags=nmct&format=json&nojsoncallback=1
    flickr.fetchPhotos(url).then(renderImages, handleError);
}

function addEventListeners(){
    searchButton.addEventListener("click", loadImages);
}

function init(){
    searchButton = document.getElementById("searchButton");
    filter = document.getElementById("filter");
    imagesList = document.querySelector(".images-list")

    addEventListeners();
}

init();