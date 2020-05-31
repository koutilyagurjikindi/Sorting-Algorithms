function InsertionSort(arr){
  for(let i=1;i<arr.length;i++){
    let currentvalue=arr[i]
    let j=i-1
    while(j>=0 && arr[j]>currentvalue){
      arr[j+1]=arr[j]
      j -=1
    }
    arr[j+1]=currentvalue
  }
  return arr
}

InsertionSort([10,20,1,21,12])
