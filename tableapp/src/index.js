import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

 import download from './assets/download.jpg';
 import lotion from './assets/lotion.jpg';
 import papaya from './assets/papaya.jpg';
 import scrub from './assets/scrub.jpg'
const product = [
  {name:"Ayur skin toner",
    id: 1 ,
    price: 500,
    image : download

},
{name:"Face lotion",
id: 2 ,
price: 600,
image : lotion

},
{name:"Face pack",
id: 3 ,
price: 800,
image : papaya

},
{name:"Face scrub",
id: 4 ,
price: 900,
image : scrub

},

  
]
// const student = [
//   {name:"Ashu",
//     rollno: 1 ,
//     email: "singh089@gmail.com",
//     contact : 9857685490

// },
// {name:"Ashi",
// rollno: 2 ,
// email: "ashi090@gmail.com",
// contact: 8974884789

// },
// {name:"Dolly",
// rollno: 3 ,
// email: "dolly90@gmail.com",
// contact: 7687598949

// },
// {name:"Titli",
// rollno: 4 ,
// email: "titli123@gmail.com",
// contact: 9678949488

// },

  
// ]
// const carService =[
//   {carid: 1001,
//     carCompany:"Kia",
//     carRent:5000,
//     image:"kia"
  
//   },
//   {carid: 1002,
//     carCompany:"Toyota",
//     carRent:4000,
//     image:"toyota"
  
//   },
//   {carid: 1003,
//     carCompany:"Hyundai",
//     carRent:6000,
//     image:"hyundai"
  
//   },
//   {carid: 1004,
//     carCompany:"Swift",
//     carRent:3000,
//     image: "swift"
  
//   }
  
// ]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1>Products Name</h1>
    <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Product Id</th>
          <th>Product Price</th>
          <th>Product Image</th>
        </tr>
      </thead>
      <tbody>
        {
          product.map((a) =>{
            return(
              <tr>
                <td>{a.name}</td>
                <td>{a.id}</td>
                <td>{a.price}</td>
                <td><img src={a.image} width={150} 
                        height={150}></img></td>

              </tr>
            )
          })
        }
      </tbody>
    </table>
    
  </div>
  // <div>
  //   <h1>Students Information</h1>
  //   <table>
  //     <thead>
  //       <tr>
  //         <th>Student Name</th>
  //         <th>Roll no</th>
  //         <th>Email</th>
  //         <th>Contact</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {
  //         student.map((b) =>{
  //           return(
  //             <tr>
  //               <td>{b.name}</td>
  //               <td>{b.rollno}</td>
  //               <td>{b.email}</td>
  //               <td>{b.contact}</td>

  //             </tr>
  //           )
  //         })
  //       }
  //     </tbody>
  //   </table>
    
  // </div>
  // <div>
  //   <h1>Car service</h1>
  //   <table>
  //      <thead>
  //        <tr>
  //          <th>Car Id</th>
  //          <th>Car Company</th>
  //         <th>Car Rent</th>
  //          <th>Car Photo</th>
  //        </tr>
  //      </thead>
  //      <tbody>
  //        {
  //          carService.map((c) =>{
  //            return(
  //              <tr>
  //               <td>{c.carid}</td>
  //               <td>{c.carCompany}</td>
  //               <td>{c.carRent}</td>
  //               <td><img src={c.image} width={150} 
  //                       height={150}></img></td>

  //             </tr>
  //          )
  //         })
  //        }
  //      </tbody>
  //    </table>
    
  //  </div>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
