import React from 'react'
import { useRef, useState } from 'react'

const Useref = () => {
    const refElement = useRef("")
    const [name, setName] = useState("React")
    console.log(refElement)
    function resetData () {
        setName("")
        refElement.current.focus()
    }
    function handlerInput () {
        refElement.current.style.color="Red"
        refElement.current.value="Ashi"
        
    }
  return (
    <div>
      <h2>Useref comp</h2>
      <input ref={refElement} type="text" value={name}
      onChange={(e)=> setName(e.target.value)}/>&nbsp;
      <button onChange={resetData}>Reset</button>
      <button onChange={handlerInput}>Update Ref</button>
    </div>
  )
}

export default Useref
