
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
            this._size+=1;
        }
        console.log('apppended...tail',this._tail, 'head',this._head)

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
        this._size+=1;
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



}



export default LinkedList;