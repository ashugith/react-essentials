import logo from './logo.svg';
import './App.css';
import EmployeeData from "./EmployeeData"
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const[data , setData] = useState([]);
  const[firstname, setFirstName] = useState('');
  const[lastname, setLastName] = useState('');
  const[id , setId] = useState(0);
  useEffect(() => {
    setData(EmployeeData)
  }, []);
  const handleEdit = (id) => {
    if(dt !== undefined){
      setId(id);
      setFirstName(dt[0].firstName);
      setLastName(dt[0].lastName);
    }
  }
  const handleDelete = (id) => {
    if(id > 0) {
      if(window.confirm("Are you sure to delete this item?")){
        const dt = data.filter(item => item.id !== id);
        setData(dt);
      }
    }
  }
  const handleSave = () => {
    
  }
  const handleClear = () => {
    
  }
  
  return (
    <div className='App'>
      <div style = {{display : 'flex', justifyContent:'center', marginTop:'10px', marginBottom:'10px'}}>
        <div>
          <label>FirstName :
            <input type='text' placeholder='Enter FirstName' onChange={(e)=> setFirstName(e.target.value)}/>
          </label>
        </div>
        <div>
          <label>LastName :
            <input type='text' placeholder='Enter LastName' onChange={(e)=> setFirstName(e.target.value)}/>
          </label>
        </div>
        <div>
        <button className='btn btn-primary'onClick={()=> handleSave()}>Save</button>&nbsp;
        <button className='btn btn-danger' onClick={()=> handleClear()}>Clear</button>
          
        </div>

      </div>
      
      <table className='table table-hover'>
        <thead>
          <tr>
            <td>S.no</td>
            <td>id</td>
            <td>FirstName</td>
            <td>LastName</td>
          </tr>

        </thead>
        <tbody>
          {
            data.map((item , index) => {
              return(
                <tr key = {index}>
                  <td>{index + 1}</td>
                  <td>{item.id}</td>
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                  <td>
                    <button className='btn btn-primary'onClick={()=> handleEdit(item.id)}>Edit</button>&nbsp;
                    <button className='btn btn-danger' onClick={()=> handleDelete(item.id)}>Delete</button>
                  </td>

                </tr>

              )
            })
          }
        </tbody>
      </table>

    </div>
   
  );
}

export default App;
