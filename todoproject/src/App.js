import React, { useEffect, useState } from 'react'
import listData from './listData'


function App() {
  const [data , setData] = useState([]);
  const [taskname , setTaskName] = useState('');
  const [taskno , setTaskNo] = useState(0);
  const [tasklimit , setTaskLimit] = useState('');

  useEffect(()=> {
    setData(listData)
  }, []);
  const handlerDelete = (taskno) => {
    if(taskno > 0){
      if(window.confirm("Are you sure to delete this item?")){
        const dt = data.filter(item => item.taskno !== taskno);
        setData(dt)

      }
    }


  }
  const handlerEdit = (taskno) =>{
    // const dt = data.filter(item => item.taskno === taskno);
    // if( dt !== undefined){
    //   setTaskNo(taskno);
    //   setTaskName(dt[0].taskname);
    //   setTaskLimit(dt[0].tasklimit);
    // }


  }
  const handlerSave = () =>{
    
  }
  const handlerClear = () =>{
    
  }


  return (
    <div className='App'>
      
      <h1 className="text-warning ; text-center" >To Do Project</h1>
      <div style={{display:'flex', justifyContent: 'center'}}>
        <div>
          <label>TaskName :
            <input type = 'text' placeholder='TaskName' onChange={(e) => setTaskName(e.target.value)} value={taskname}/>

          </label>
         

        </div>
        <div>
          <label>TaskNo :
            <input type = 'text' placeholder='TaskNo' onChange={(e) => setTaskNo(e.target.value)}value= {taskno}/>

          </label>
         

        </div>
        <div>
          <label>TaskLimit :
            <input type = 'text' placeholder='TaskLimit' onChange={(e) => setTaskLimit(e.target.value)}value={tasklimit}/>

          </label>
         

        </div>
        <div>
        <button className='btn btn-primary' onClick={() => handlerSave()}>Save</button>&nbsp;
        <button className='btn btn-danger'onClick={() => handlerClear()}>Clear</button>

        </div>

      </div>
      <table className='table table-hover'>
        <thead>
          <tr>
            <td>S.No</td>
            <td>TaskNo</td>
            <td>TaskName</td>
            <td>TaskLimit</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item , index) => {
              return(
                <tr key = {index}>
                  <td>{index + 1}</td>
                  <td>{item.taskno}</td>
                  <td>{item.taskname}</td>
                  <td>{item.tasklimit}</td>
                  <td>
                    <button className='btn btn-primary' onClick={() => handlerEdit(item.Taskno)}>Edit</button>&nbsp;
                    <button className='btn btn-danger'onClick={() => handlerDelete(item.Taskno)}>Delete</button>
                  </td>

                </tr>
              )
            })
          }
        </tbody>
      </table>
      
    </div>
  )
}

export default App
