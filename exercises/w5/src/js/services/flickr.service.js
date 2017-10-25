export function getPhotos(url){

    // TODO exception class maken
    if(!url) throw new Error("UrlNotFoundException");

    let p = new Promise((ok, nok) => {
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.onerror = (err) => {
            //console.error(err);
            nok(err);
        };
    
        xmlHttp.onload = (res) => {
            if(xmlHttp.readyState === 4){
                ok(JSON.parse(xmlHttp.responseText));
            }
        };
    
        xmlHttp.open("GET", url, true);
        xmlHttp.send();
    
    });

    return p;

    

}

// TODO --> fetch api
export function fetchPhotos(url){}