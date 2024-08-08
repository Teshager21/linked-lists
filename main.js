import LinkedList from "./LinkedList.js";
let alphabet= new LinkedList();
alphabet.head='a';

alphabet.append("b");
// alphabet.append("c");
// alphabet.append("d");
alphabet.prepend('c');

console.log('size',alphabet.length)

console.log('head',alphabet.head)
console.log('tail',alphabet.tail)
