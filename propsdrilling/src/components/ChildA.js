import ChildB from './ChildB'
const ChildA = ({msgA}) => {
    return(
        <>
        <h2>I am ChildA Comp - {msgA}</h2>
        <ChildB msgB = {msgA}></ChildB>
        </>
    )
}
export default ChildA