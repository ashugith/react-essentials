import './Child.css'
const ChildA = (props) => {
    return(
      <div className="xyz">
        <h3>Fruit</h3>
        <h3>{props.fruit}</h3>

      </div>
    )
}
export default ChildA