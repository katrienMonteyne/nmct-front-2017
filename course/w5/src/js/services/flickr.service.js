

export function loadPhotos(url){
    if(!url) throw new Error("no url");

    var p = new Promise((ok, nok)=>{
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.onerror = (err)=>{nok(err);}
        xmlHttp.onload =  (res)=>{
            if(xmlHttp.readyState === 4){
                ok(JSON.parse(xmlHttp.responseText));
            }
        }

        xmlHttp.open("GET", url, true);
        xmlHttp.send();
    });

    return p;
}

export function fetchPhotos(url){
   return fetch(url).then((response) => {

    return response.json();

   });
}


