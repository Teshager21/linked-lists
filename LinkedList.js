
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
    console.log('settiiiiiing head',this._head,'and tail',this._tail)
    }

    get tail(){
        return this._tail;
    }
}



export default LinkedList;