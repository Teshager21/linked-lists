
class Node {
    constructor(value){
        this.value=value;
        this.next=null;
    }

}

class LinkedList {
    constuctor(){
        this.head=null;
        this.tail=null;
        this.size=0; 
    }

    get head(){
        return this._head;
    }

    set head(value){
    const node= new Node(value);
    this._head = node;
    this._tail = node;
    this._size=1;
    }

    get tail(){
        return this._tail;
    }

    get size(){
        return this._size;
    }

    append(value){
        const node= new Node(value);
        if(this._head===null|| this._head===undefined){
            this._head= node;
            this._tail=node; 
            this._size=1;
        } 
        else {
            this._tail.next= node;
            this._tail= node;
            this._size++;
        }
        // console.log('apppended...tail',this._tail, 'head',this._head)

    }

 prepend(value){
    const node= new Node(value);
    if(this._head===null|| this._head===undefined){
        this._head= node;
        this._tail=node;
        this._size=1; 
    } else{
        node.next=this._head;
        this._head=node;
        this._size++;
    }  
 }
 at(index){
    let counter=0;
    let currentNode=this._head;
    while (counter<index){
     currentNode=currentNode.next;
     counter++;
    }
    return currentNode;
 }

 pop(){
    const toBePoped= this._tail;
    this.at(this._size-2).next=null;
    this._size=this._size-1;
    return toBePoped;
 }

 contains(value) {
    return (this.find(value)!==null)? true : false;
 }

 find(value){
    let counter=0;
    const sizeOfList= this._size;
    while(counter<sizeOfList){
        if(this.at(counter).value===value) return counter;
        counter++;
    }
    return null;
 }

 toString(){
    let counter=0;
    let to_string='';
    const sizeOfList= this._size;
    while(counter<sizeOfList){
     if(counter===0) to_string=this.at(counter).value;
     if(counter>0)to_string=to_string+"->"+this.at(counter).value;
     counter++;
    }
    return to_string;
 }

 insertAt(value, index){
 if(index>this._size) {
    const error =new Error(`INDEX OUT OF RANGE : last index of list is ${this._size}`);
    throw error;
    return
}
 const node= new Node(value);
 node.next= this.at(index);
 (index>0)? this.at(index-1).next = node : this._head=node;
 this._size++;
 }

 removeAt(index){
    if(index>this._size) {
        const error =new Error(`INDEX OUT OF RANGE : last index of list is ${this._size}`);
        throw error;
        return
    }
   (index!==0) ? this.at(index-1).next=this.at(index+1) : this._head=this.at(1);
    this._size--; 
 }


}



export default LinkedList;