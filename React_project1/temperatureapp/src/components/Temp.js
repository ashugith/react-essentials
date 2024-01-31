import './Temp.css';
import { useState } from "react"

const Temp = () => {
    const [temp , setTemp] = useState(0)
    const [color, setColor] = useState("cold")
    function incrementTemp () {
        setTemp(temp + 1)
        if(temp>= 20){
            setColor("hot")
        }
    }
    function decrementTemp () {
        setTemp(temp - 1)
        if(temp <= 20)
        setColor("cold")
    }
    return(
        <div className='app-container'>
            <div className='temp-display-container'>
                <div className={`temp-display ${color}`}>
                    {temp} °C
                </div>
            </div>
            <div className='button-container'>
                <button onClick={incrementTemp} className='icon'>+</button>
                <button onClick={decrementTemp}  className='icon'>-</button>
            </div>
        </div>
    )
}
export default Temp;