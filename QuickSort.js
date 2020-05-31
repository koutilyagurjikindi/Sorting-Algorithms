function QuickSort(arr){
  if(arr.length < 2){
    return arr
  }
  let pivot = arr[arr.length-1]
  let leftarray=[]
  let rightarray=[]
  for(i=0;i<arr.length-1;i++){
    if(arr[i]<pivot){
      leftarray.push(arr[i])
    }else{
      rightarray.push(arr[i])
    }
  }
  if(leftarray.length>0 && rightarray.length>0){
    return [...QuickSort(leftarray),pivot,...QuickSort(rightarray)]
  }else if(leftarray.length>0){
    return [...QuickSort(leftarray),pivot]
  }else{
    return [pivot,...QuickSort(rightarray)]
  }
}

QuickSort([10,20,1,25,15])

