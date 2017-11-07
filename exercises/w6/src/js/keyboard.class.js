import * as freq from './frequency.module';
import Key from './key.class';
import {notes} from './constants';

export default class Keyboard{
    constructor(startFreq = 110){
        this.startFreq = startFreq;
        freq.setStartKey(this.startFreq);
        this.keys = this.generateKeys(2);
    }

    renderKeys(){
        var i = 0, l = this.keys.length, bobTheHTMLBuilder = "";
        for(i; i < l; i++){
          bobTheHTMLBuilder += this.keys[i].renderHTML();
        }
        return bobTheHTMLBuilder;
    }

    renderHTML(){
        return '<div class="keyboard">'+this.renderKeys()+'</div>';
    }

    generateKeys(nrOctaves = 1){
        var i = 0, new_keys = [];
        
          for(i ; i <= 2 + 12 * nrOctaves; i++){
            var new_key = new Key(notes[i%12], freq.calculateFrequency(i));
            new_key.octave = 1 + Math.floor((i - 2) / 12);
            new_key.octave = new_key.octave === 0 ? 1: new_key.octave;
            new_keys.push(new_key);
          }
        
          return new_keys;
    }
}
