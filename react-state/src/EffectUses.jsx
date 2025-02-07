

import  { useState,useEffect} from "react";

export default function EffectUses() {
  let [count, setCount] = useState(0);

  let increaseCount = () => {
    setCount((r)=>r + 1);
  }
  useEffect(function print() {
    console.log("useEffect called");
    });

 return (
    <div>

              <h1> current count={count}</h1>
        <button onClick={increaseCount}>Increase Count</button>
        
    </div>
  )
}