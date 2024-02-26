import G from '../../assets/G.jpeg'
import { useForm } from 'react-hook-form'
import './Register.css'
import axios from 'axios'


const Register = () => {
  const {register, handleSubmit, reset}  = useForm()
  function saveData (data) {
    axios.post("http://localhost:8080/customer",data)
    alert("Your Data Added !!!!")
    reset ()
}

  return (
      <>
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
                  <button type="submit" className="btn btn-warning col-md-12 mb-4 fw-bold fs-4">Book Car</button>
              </div>
          </form>
      </>
  )
}
export default Register;
