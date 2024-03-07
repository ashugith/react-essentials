import { useEffect, useState } from "react"
import './Delete.css'
import { useNavigate, useParams ,NavLink } from "react-router-dom"

const Delete = () => {
    const [customer , setCustomer] = useState({})
    const {customerID} = useParams()
    const navigate = useNavigate ()
    async function fetchData(){
        const result = await axios.get(`http://localhost:8080/customer/${customerID}`)
            setCustomer(result.data)
    }

    useEffect(() => {
        fetchData ()
    }, [])
    function deleteData () {
        axios.delete(`http://localhost:8080/customer/${customerID}`)
        alert("Data Deleted !!!")
        navigate('/show')
    }
    return (
        <>
        <form onSubmit={()=> deleteData()}>
            <h2>Do You Really Want To Delete Record For</h2>
            <h2>ID :- {customer.id}</h2>
            <h2>Name :- {customer.name}</h2>
            <button type="submit" className="btn btn-outline-success fs-3 me-3">YES</button>
            <NavLink to={'/show'}><button type="button" className="btn btn-outline-warning fs-3">NO</button></NavLink>
        </form>
        </>
    )
}
export default Delete;