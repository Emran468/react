
function formSubmit(event){
    event.preventDefault();
    console.log("Form submitted")
}
 export default function FormClick(){
    return (
        <form>
            <input type="text" placeholder="Enter your name"/>
            <button onClick={formSubmit}>Submit</button>
        </form>
    )
 }