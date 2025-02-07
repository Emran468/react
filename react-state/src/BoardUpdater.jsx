import { useState } from "react";
export default function  BoardUpdater(){
    let [moves , SetMoves]= useState({blue:0,green:0, red:0,yellow:0});
    let updateBlue=()=> {
        //  moves.blue+=1;
        //  console.log(`blue moves=${moves.blue}`);
        SetMoves( (p) =>{
            return{...p, blue:moves.blue+1}
   
        })
    }

    let updateGreen=()=>{

        SetMoves((p)=>{
            return{...p, green:moves.green+1}
        });
    }

    let updateRed=()=>{
        SetMoves((p)=>{
            return{...p, red:moves.red+1}
        });
    }
    let updateYellow=()=>{
        SetMoves((p)=>{
            return{...p, yellow:moves.yellow+1}
        });
    }
    return(

        <div>
        <p> Board Update</p>

        <div className="board">
         <p>blue moves={moves.blue}</p>
         <button style={{backgroundColor:"blue",color:"black" }}onClick={updateBlue}>+1</button>

         <p>green moves={moves.green}</p>
         <button style={{backgroundColor:"green",color:"black" }} onClick={updateGreen}>+1</button> 

         <p>red moves={moves.red}</p>
         <button style={{backgroundColor:"red",color:"black" }} onClick={updateRed}>+1</button> 

         <p>yellow moves{moves.yellow}</p>
         <button style={{backgroundColor:"yellow",color:"black" }} onClick={updateYellow}>+1</button>
        
        </div>
        
        </div>
    )
}