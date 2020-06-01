function MergeSort(arr){

  if(arr.length<2){
    return arr
  }
  let middle = Math.floor(arr.length/2)
  const leftarray=arr.slice(0,middle)
  const rightarray=arr.slice(middle,arr.length)

  return Merge(MergeSort(leftarray),MergeSort(rightarray))
}

function Merge(leftarray,rightarray){
  const result=[]
  while(leftarray.length>0 && rightarray.length>0){
    if(leftarray[0]<rightarray[0]){
      result.push(leftarray.shift())
    }else{
      result.push(rightarray.shift())
    }
  }
  while(leftarray.length){
    result.push(leftarray.shift())
  }
  while(rightarray.length){
    result.push(rightarray.shift())
  }
  return result
}

MergeSort([10,20,2,15,19])
