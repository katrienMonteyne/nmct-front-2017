"use strict";

function demo(test){

}

function demo(){
  return 42;
}

var result = demo("test");
//console.info(result);

function examen(){
  var a = 12, b = 30, c = 0;
  a;
  ++b;

  console.info(a); //12
  console.info(b); //31 30

}

function add(){
  var result = 0;

  for(var i = 0, l = arguments.length ; i < l ; i+=2){
    result += arguments[i] + arguments[i+1];
  }

  return result;
}


var xmlHttp = new XmlHttpRequest();
xmlHttp.onerror = function(){};
xmlHttp.onload = function(){};

var global;
function showData(){
  var hondenPoep = getHondenPoep();
  console.info(hondenPoep);
}
//console.info(hondenPoep);


//var result = add(6,4);
//console.info(result);
