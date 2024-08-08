
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
        this.length=1;
    }

    get head(){
        return this._head;
    }

    set head(value){
    const node= new Node(value);
    this._head = node;
    this._tail = node;
    }

    get tail(){
        return this._tail;
    }

<<<<<<< HEAD
    get length(){
        return this._length;
    }

    append(value){
        const node= new Node(value);
        if(this._head===null|| this._head===undefined){
=======
    append(value){
        console.log('apppending...tail',this._tail, 'head',this._head)
        if(this._head===null|| this._head===undefined){
            const node= new Node(value);
>>>>>>> af48baf5a7ef272f4a585d492c6918f253c2d98f
            this._head= node;
            this._tail=node; 
        } 
        else {
<<<<<<< HEAD
            this._tail.next= node;
            this._tail= node;
        }
        this._length=this._length+1;
        console.log('apppended...tail',this._tail, 'head',this._head,'len',this.length)

    }

 prepend(value){
    const node= new Node(value);
    if(this._head===null|| this._head===undefined){
        this._head= node;
        this._tail=node; 
    } else{
        node.next=this._head;
        this._head=node;
    }  
 }

=======
        const node=new Node(value);
        this._head.next= node;
        this._tail= node;
        }
        this.length+=1;
        console.log('apppended...tail',this._tail, 'head',this._head)

    }

>>>>>>> af48baf5a7ef272f4a585d492c6918f253c2d98f

}



export default LinkedList;