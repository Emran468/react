
function click(){
    console.log( "i am emran");
}

function me(){
    console.log( "i am me");
}
export default function HandleClick(){
    return (
        <div>
            <button onClick={click}>Click Me</button>
            <button onClick={me}>Click Me</button>
        </div>
    )
}