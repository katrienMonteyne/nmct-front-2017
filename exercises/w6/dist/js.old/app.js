import Keyboard from './keyboard.class';

const kb = new Keyboard(110);
const render = kb.renderHTML();

document.querySelector("#piano").innerHTML = render;

var waveform = waveform || 'square';

var allKeys = document.querySelectorAll(".piano__key");
for (var i = 0, l = allKeys.length; i < l; i++) {
    allKeys[i].addEventListener('mousedown', function () {
          var hz = this.getAttribute("hz");
          //console.info(hz);
          joke.play(hz, 0.5, waveform);
    });
}


  


