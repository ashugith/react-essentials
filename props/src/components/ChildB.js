import './ChildB.css'
const ChildB = (props) => {
    return (
        <div className="y">
            <h3>Favone</h3>
            <h3>{props.name}</h3>
            <h3>{props.fav}</h3>
        </div>
    )
}
export default ChildB