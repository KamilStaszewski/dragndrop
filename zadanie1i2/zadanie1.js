
var hashMap=function(){
  this.hashDict=[];
  this.size=0;
  this.debug=true;
  return this;
}
hashMap.prototype.put=function(_key,_value){
  if (!this.hashDict.hasOwnProperty(_key)) {
      this.hashDict.push(_key);
      ++this.size;
  }
  else if(this.debug)
      throw 'duplicate keys not allowed. key : '+_key;
  
}
hashMap.prototype.putAll=function(_keyArray,_valueArray){
  if(_keyArray.length===_valueArray.length) {
      _l=_keyArray.length;
      for(i=0;i<_l;i++) {
          _key=_keyArray[i];
          _value=_valueArray[i];
          this.put(_key,_value);
      }
  }
}
hashMap.prototype.remove=function(_key){
  if (this.hashDict.hasOwnProperty(_key)) {
      delete this.hashDict[_key];
      --this.size;
  }
  else if(this.debug)
      throw 'key not found';
}
hashMap.prototype.filterByProperty = function(condition){

  return this.hashDict.map(element => element[condition]);

}


var hash= new hashMap(); 
hash.put({
  country: 'Poland',
  population: 400000,
  language: 'PL'
})
hash.put({
  country: 'United States',
  population: 3000000,
  language: 'EN'
})
console.log(hash.filterByProperty('population'))
