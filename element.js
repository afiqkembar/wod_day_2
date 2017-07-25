function adjacentElementsProduct(inputArray) {
  var max = inputArray[0]*inputArray[1];
  for(i=1 ; i < inputArray.length -1; i++){
    if(  inputArray[i]*inputArray[i+1] > max){
    max = inputArray[i]*inputArray[i+1];
   }
  }
  return max;
}
document.write(adjacentElementsProduct( [3, 6, -2, -5, 7, 3]));
