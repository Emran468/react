
import  {useState} from 'react';
export default function SimpleForm(){
     let [fullname, setFullname] = useState("Emran");
       let handleNmechnage = (event) => {
        // console.log(event.target.value);
      setFullname(event.target.value);
       }

    return (
        <div>
            <h1>Simple Form</h1>
            <form>
             <input type="text" placeholder='Enter your name ' onChange={handleNmechnage}/>
             <button>Submit</button>
            </form>
        </div>
    )
}