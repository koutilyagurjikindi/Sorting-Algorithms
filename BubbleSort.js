function BubbleSort(arr){
  for(let i=0;i<arr.length-1;i++){
    for(let j=0;j<arr.length-1;j++){
      if(arr[j]>arr[j+1]){
        [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
      }
    }
  }
  return arr
}

BubbleSort([10,20,1,25,14])
