


// string, number, undefined, null, object (array, function), bool, symbol
/*(function(){
  "use strict";
  (function demo(){
      // function scope, block scope

      for(let i = 0; i < 10 ; i++){
        console.info(i); // 0 > 9
      }

      console.info(i); // 10

      // let const

  })();
})();*/

// this

function demo(){
  console.info(this);
}

demo();
