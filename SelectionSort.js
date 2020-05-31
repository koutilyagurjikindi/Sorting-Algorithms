function SelectionSort(arr){
  for(let i=0;i<arr.length;i++){
    min=i
    for(let j=i+1;j<arr.length;j++){
      if(arr[j]<arr[min]){
        min=j
      }
    }
    if(min !=i){
      [arr[i],arr[min]]=[arr[min],arr[i]]
    }
  }

  return arr
}

SelectionSort([10,20,1,25,15])
