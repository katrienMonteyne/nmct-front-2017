
var notes = ["LA", "LA#", "SI", "DO", "DO#", "RE", "RE#", "MI", "FA", "FA#", "SOL", "SOL#"];

function Keyboard(startFreq){
  this.startFreq = startFreq;
  Freq.setStartKey(startFreq);
  this.keys = this.generateKeys(2);
}

Keyboard.prototype.generateKeys = function(nrOctaves){
  var i = 0, new_Keys = [];

  for(i ; i < 2 + 12 * nrOctaves ; i++){

    var new_Key = new Key(notes[i%12], Freq.calculateFrequency(i));
    new_Key.octave = 1 + Math.floor((i-2) / 12);
    new_Key.octave = new_Key.octave === 0 ? 1 : new_Key.octave;
    new_Keys.push(new_Key);
  }

  return new_Keys;
}

Keyboard.prototype.renderHTML = function(){
  return '<div class="piano">'+ this.renderKeysHTML() +'</div>';
}

Keyboard.prototype.renderKeysHTML = function(){
  var i, l = this.keys.length, bobTheHTMLBuilder = "";
  for(i = 0; i < l ; i++){
    bobTheHTMLBuilder += this.keys[i].renderHTML();
  }

  return bobTheHTMLBuilder;
}
