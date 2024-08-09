import LinkedList from "./LinkedList.js";
let alphabet= new LinkedList();
alphabet.head='a';

alphabet.append("b");
alphabet.append("c");
alphabet.append("d");
alphabet.prepend('A');

// console.log('size',alphabet.size)

// console.log('head',alphabet.head)
// console.log('tail',alphabet.tail)
console.log(alphabet._size)
// console.log('using attttttttttttttttt',alphabet.at(4));
console.log(alphabet.pop());
console.log(alphabet._size)
console.log('using attttttttttttttttt',alphabet.at(4));
