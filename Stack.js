class StackClass {
  constructor(){
    this.count=0
    this.storage={}
  }
  push(value){
    this.storage[this.count]=value
    this.count++
    return this.storage
  }
  pop(){
    if(this.count < 0 ){
      return undefined
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result
  }
  size(){
    return this.count+1
  }
}

const mystack = new StackClass()

mystack.push(10)
mystack.push(20)
mystack.push(30)
mystack.pop()
mystack.pop()
mystack.pop()
mystack.pop()
mystack.push(10)
mystack.push(20)
mystack.push(30)
mystack.size()
