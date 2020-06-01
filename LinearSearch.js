function LinearSearch(arr,elem){
  for(let i=0;i<arr.length;i++){
    if(elem === arr[i]){
      return i
    }
  }
  return -1
}

LinearSearch([10,20,1,27,12],27)
