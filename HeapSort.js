function HeapSort(arr){
  if(arr.length<2){
    return arr
  }
  let arrlength=arr.length
  for(let i=(Math.floor(arrlength/2)-1);i>=0;i--){
    sortParentandChild(arr,arrlength,i)
  }
  for(let i=arrlength-1;i>0;i--){
    console.log(i)
    swap(arr,0,i)
    arrlength--
    sortParentandChild(arr,arrlength,0)
  }
  return arr
}

function sortParentandChild(arr,arraylength,parentindex){
  let leftindex = parentindex*2+1
  let rightindex = parentindex*2+2
  let maxindex=parentindex
  if(leftindex<arraylength && arr[leftindex]<arr[maxindex]){
    maxindex=leftindex
  }
  if(rightindex<arraylength && arr[rightindex]<arr[maxindex]){
    maxindex=rightindex
  }
  if(maxindex != parentindex){
  swap(arr,parentindex,maxindex)
  sortParentandChild(arr,arraylength,maxindex)
  }
}

function swap(arr,parentindex,maxindex){
  let temp=arr[parentindex]
  arr[parentindex]=arr[maxindex]
  arr[maxindex]=temp

  console.log(arr[maxindex],arr[parentindex])
  console.log(arr)
}

HeapSort([10,20,1,21])
