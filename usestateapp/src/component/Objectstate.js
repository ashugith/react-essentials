import { useState } from "react";
const Objectstate = () => {
    const [name , setName] = useState({firstname:'Ashu', lastname:'Singh'})
    function firstnameHandler (e){
        setName ({
            ...name,firstname : e.target.value
        })
    }
    function lastnameHandler (e) {
        setName ({
            ...name,lastname : e.target.value
        })
    }
    return(
        <>
        <h2>I am object</h2>
        <form>
            <input type="text" value={name.firstname} onChange={firstnameHandler}></input>
            <br></br>
            <input type="text" value={name.lastname} onChange={lastnameHandler}></input>
            <br></br>
        </form>
        <h3>{name.firstname} {name.lastname}</h3>
        </>
    )
}
export default Objectstate
