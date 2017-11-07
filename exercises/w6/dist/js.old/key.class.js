function Key(name, freq){
  this.name = name;
  this.freq = freq;
  //this.octave = 1;
}

Key.prototype.octave = 1;
Key.prototype.renderHTML = function(){
  if(this.name.endsWith('#')){
      return '<div class="piano__key piano__key--sharp" note="'+this.name+'" octave="'+this.octave+'" hz="'+this.freq+'" ></div>';
  }
  else{
    return '<div class="piano__key" note="'+this.name+'" octave="'+this.octave+'" hz="'+this.freq+'" ></div>';
  }
}

// var k = new Key("LA", 110);
//k.renderHTML(); // <-- html
