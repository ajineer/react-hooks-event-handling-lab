// Code Keypad Component Here

function Keypad (){
    return (
        <input type="password" onChange={handleChange}></input>
    )
        function handleChange(){
            console.log("Entering password...")
        }
}


export default Keypad;