import './Day.css'
const Day = (props) => {
    return(
        <div className='day'>
            <h2>Wednesday</h2>
            <h3>{props.name}</h3>
            <h3>{props.time}</h3>
            <h3>{props.year}</h3>
        </div>
    )
}
export default Day