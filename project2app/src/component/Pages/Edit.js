import React, { useEffect } from 'react'
import './Edit.css'
import G from '../../assets/G.jpeg'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
  const {register , handleSubmit , setValue} = useForm()
  const {customerID} = useParams()
  const navigate = useNavigate()
  async function fetchData () {
    const result =  await axios.get(`http://localhost:8080/customer/${customerID}`)
    setValue("name" , result.data.name)
    setValue("email" , result.data.email)
    setValue("pickup_address" , result.data.pickup_address)
    setValue("destination_address" , result.data.destination_address)
    setValue("contact" , result.data.contact)
    setValue("city" , result.data.city)
    setValue("state" , result.data.state)
    setValue("zipcode" , result.data.zipcode)
    
  }
  useEffect(()=>{
    fetchData()
  }, [])
  function saveData(data){
    axios.put(`http://localhost:8080/customer/${customerID}`,data)
    alert("Data updated successfully")
    navigate('/show')

  }
  return (
    <div>
        <img src={G} alt="Gimage" className='img w-100'/>
          <h1 className="mt-3 mb-5 h1 text-danger">BOOK YOUR CAR</h1>
          <form onSubmit={handleSubmit(saveData)} className="row g-3 w-50 mx-auto bg-dark rounded-3 p-2 form opacity-75">
              <div className="col-md-6">
                  <label htmlFor="name" className="form-label text-warning fs-5">Name</label>
                  <input type="name" className="form-control" id="name" {...register("name")}/>
              </div>
              <div className="col-md-6">
                  <label htmlFor="email" className="form-label text-warning fs-5">Email</label>
                  <input type="email" className="form-control" id="email" {...register("email")}/>
              </div>
              <div className="col-md-6">
                  <label htmlFor="pickupaddress" className="form-label text-warning fs-5">Pickup Address</label>
                  <input type="text" className="form-control" id="pickupaddress" placeholder="1234 Main St" {...register("pickup_address")}/>
              </div>
              <div className="col-md-6">
                  <label htmlFor="destinationaddress" className="form-label text-warning fs-5">Destination Address</label>
                  <input type="text" className="form-control" id="destinationaddress" placeholder="Apartment, studio, or floor" {...register("destination_address")}/>
              </div>
              <div className="col-md-3">
                  <label htmlFor="contact" className="form-label text-warning fs-5">Contact Number</label>
                  <input type="tel" className="form-control" id="contact" {...register("contact")}/>
              </div>
              <div className="col-md-3">
                  <label htmlFor="city" className="form-label text-warning fs-5">Destination City</label>
                  <input type="text" className="form-control" id="city" {...register("city")}/>
              </div>
              <div className="col-md-3">
                  <label htmlFor="state" className="form-label text-warning fs-5">Select State</label>
                  <select id="state" className="form-select" {...register("state")}>
                      <option value="">Choose State</option>
                      <option value="maharashtra">Maharashtra</option>
                      <option value="madhya pradesh">Madhya Pradesh</option>
                      <option value="uttar pradesh">Uttar Pradesh</option>
                      <option value="rajasthan">Rajasthan</option>
                      <option value="uttarakhand">Uttarakhand</option>
                  </select>
              </div>
              <div className="col-md-3">
                  <label htmlFor="zipcode" className="form-label text-warning fs-5">Zip</label>
                  <input type="tel" className="form-control" id="zipcode" {...register("zipcode")}/>
              </div>
              <div>
                  <button type="submit" className="btn btn-warning col-md-12 mb-4 fw-bold fs-4">Update Customer Record</button>
              </div>
          </form>
      
    </div>
  )
}

export default Edit
