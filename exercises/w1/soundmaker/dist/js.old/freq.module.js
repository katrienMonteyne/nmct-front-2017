(function(ctx){

    var freq_module = (function(){

    var _startKey = null;

    return {

        setStartKey: function(v){
          this._startKey = v;
        },
        calculateFrequency : function(keyNr){
          if(this._startKey === null) throw new Error("hz.js: nullreference frequency error");
          return this._startKey * Math.exp(keyNr * Math.LN2 / 12);
        }


    };

  })();


  ctx.Freq = freq_module;

})(window);
