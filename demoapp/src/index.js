import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const name = "Ashu"
const lname = "Singh"
const student = {
  sname : "Anjali",
  sid : {
    courseid : 1,
    libraryid : 3
  }
}
const movieName = [
  {releasedate : 2013 , name: 'Tiger' , rating : 3.5,},
  {releasedate : 2014 , name: 'Tiger Zinda hai' , rating : 3.5,},
  {releasedate : 2023 , name: 'Tiger 3' , rating : 3.5,}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h2>Name : {name}</h2>
    <h3>lname : {lname}</h3>
    <h2>Student Name : {student.sname}</h2>
    <h2>Library Id : {student.sid.libraryid}</h2>
    <hr/>
    <h1>Access array of object property</h1>
    <table>
      <thead>
        <tr>
          <th>Releasedate</th>
          <th>Moviename</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        { movieName.map((a) => {
          return(
            <tr>
              <td>{a.releasedate}</td>
              <td>{a.name}</td>
              <td>{a.rating}</td>
            </tr>
          )
        })

      }
    </tbody>
  </table>
</div>

);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
