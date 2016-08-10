function trimStr(str,startByte,byteSize){
  var array = [],temp = [];
  var index = 0,result ="";

  for (var j=0,len=str.length; j <len ; j++) {
    temp[j*2] = str.charCodeAt(j) >>> 8;
    temp[j*2+1] = str.charCodeAt(j) & 0x00ff;
  }

  for (var i = 0;i < temp.length;i++) {
    if(temp[i*2] === 0){
        array[index] = temp[i*2+1];
        index += 1;
    }else{
        array[index] = "undefined";
        array[index + 1] = (temp[i*2] << 8 | temp[i*2+1]);
        index += 2;
    }
  }

  for(var i = startByte;i < startByte + byteSize;i++){
    if(array[i] !="undefined")
      result += String.fromCharCode(array[i]);
  }

  return result;
}
