export default class Key{
    constructor(name, freq){
        this.name = name;
        this.freq = freq;
    }

    renderHTML(){
        if(this.name.endsWith('#')){
            return '<div class="piano__key piano__key__sharp" note="'+this.name+'" octave="'+this.octave+'"  hz="'+this.freq+'"></div>';
          }
          else{
            return '<div class="piano__key" note="'+this.name+'" octave="'+this.octave+'"  hz="'+this.freq+'"></div>';
          }
    }
}





