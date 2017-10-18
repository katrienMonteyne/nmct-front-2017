let _startKey = null;

export function getStartKey(){
    return _startKey;
} 

export function setStartKey(v){
    return _startKey = v;
} 

export function calculateFrequency(keyNr){
    if(_startKey === null);
    
    return _startKey * Math.exp(keyNr * Math.LN2 / 12);
}