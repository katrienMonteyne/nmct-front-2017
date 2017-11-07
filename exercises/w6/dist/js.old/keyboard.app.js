(function(){
  "use strict";

  var kb = new Keyboard(110);
  var html = kb.renderHTML();

  document.querySelector("#piano").innerHTML = html;

})();
