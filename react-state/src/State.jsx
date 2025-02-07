import { useState } from 'react';

function Random(){
    console.log("Random function is called");
    return Math.random();
}
export default function State() {
   // javascript code
   // let count=0;

   // function inCount(){
   //       count +=1;
   //          console.log(count);
   // }
   // react code

const [count, setCount] = useState(Random);
console.log("after execute");

// console.log(`outer function is ${count}`);
let inState = () => {
    //   setCount( count + 1);
    //   console.log(  `inner function is ${count}`);
    // setCount((currentValue) => {
    //     return currentValue + 1;

    // })
    setCount((currentValue) => {
        return currentValue + 1;

    })
    setCount((currentValue) => {
        return currentValue + 1;

    })
    // setCount(22);
  }
return (
    <>
    <h1>Count={count}</h1>
    <button onClick={inState}>increse number</button>
    </>
)
  
}