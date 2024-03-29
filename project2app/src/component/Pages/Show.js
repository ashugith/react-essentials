import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
const Show = () => {


    const [customer,setCustomer] = useState([])
    const [searchName , setsearchName] = useState([])


    async function getData () {
        const response = await axios.get("http://localhost:8080/customer")
        const result = await response.data
        setCustomer(result)
    }


    useEffect(()=>{
        getData()
    },[])

    const filterData = customer.filter((customer)=>{
        return
    customer.name.toLowerCase().includes(searchName.toLowerCase())
    })
    return(
        <>
           <h2>Customer Details</h2>
           <div className="row container mb-5">
            <label className="form-label col3 fs-3 text-primary">Search Customer Data :-</label>
            <div className="col-9">
                <input type = "search" className="form-control" onChange={(e)=> setsearchName(e.target.value)}/>

            </div>

           </div>
           <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Customer Name</th>
                        <th>Customer Email</th>
                        <th>Pickup Address</th>
                        <th>Destination Address</th>
                        <th>Contact Number</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zipcode</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customer.map((x)=>{
                            return(
                                <tr key={x.id}>
                                    <td>{x.id}</td>
                                    <td>{x.name}</td>
                                    <td>{x.email}</td>
                                    <td>{x.pickup_address}</td>
                                    <td>{x.destination_address}</td>
                                    <td>{x.contact}</td>
                                    <td>{x.city}</td>
                                    <td>{x.state}</td>
                                    <td>{x.zipcode}</td>
                                    <td>
                                       <NavLink to={`/customer/update/${x.id}`}><button className="btn btn-warning me-1">Edit</button></NavLink>
                                        <NavLink to={`/customer/delete/${x.id}`}><button className=" btn btn-danger">Delete</button></NavLink>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
           </table>
        </>
    )
}
export default Show;
