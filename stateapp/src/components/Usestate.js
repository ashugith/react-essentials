import { useState } from "react"
const Usestate = () => {
    const [movie, setMovie] = useState('2 states')
    const [actor, setActor] = useState('Arjun Kapoor')
    function udateDetails (){
        setMovie('Animal')
        setActor('Ranbir Kapoor')
    }
    return (
        <>
        <p>Movie Name- {movie}</p>
        <p>Actor Name- {actor}</p>
        <button onClick={udateDetails}>Update Movie</button>
        </>
    )
}
export default Usestate