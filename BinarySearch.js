function BinarySearch(arr,elem){
  let start = 0
  let end = arr.length - 1
  let middle=Math.floor((start+end)/2)
  console.log(start,end,middle)
    while(arr[middle] != elem && start<=end){
      if(arr[middle]>elem){
        start = middle+1
      }else{
        end = middle-1
      }
      middle=Math.floor((start+end)/2)
    }
  return arr[middle]===elem?middle:-1
}

BinarySearch([10,20,25,26,27,41,15],15)
