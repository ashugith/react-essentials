import ChildC from './ChildC'
const ChildB = ({msgB}) => {
    return(
        <>
        <h2>I am ChildB Comp- {msgB}</h2>
        <ChildC msgC = {msgB}></ChildC>
        </>
    )
}
export default ChildB

