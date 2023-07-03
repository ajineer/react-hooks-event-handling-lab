// Code EyesOnMe Component Here
function EyesOnMe(){
    return (
        <button onFocus={logGood} onBlur={logBlur}>Eyes on me</button>
    )
    function logGood(){
        console.log("Good!")
    }

    function logBlur(){
        console.log("Hey! Eyes on me!")
    }
}

export default EyesOnMe