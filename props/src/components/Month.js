import './Month.css'
const Month = (props) => {
    return(
        <div className='month'>
            <h3>Jan</h3>
            <h3>{props.name}</h3>
        </div>
    )
}
export default Month