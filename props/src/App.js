import Month from './components/Month';
import Day from './components/Day';
import './App.css';
import Getdata from './components/Getdata'
import ChildA from './components/ChildA';
import ChildB from './components/ChildB';
const ashu = 2001

function App() {
  const info = [
    {name:"ashi" , by: 2001 , city:"Jabalpur"},
    {name:"asha" , by: 2002 , city:"Varanasi"},
    {name:"dipti" , by: 2003 , city:"Allahabad"},
    {name:"arnika" , by: 2005 , city:"Rewa"},
  ]
  return (
    <div className='b'>
      <Day name="Thursday" time="7:30" year={ashu}></Day>
      <br></br>
      <Month name="Feb"></Month>
      <br></br>
      <Getdata data={info}></Getdata>
      <ChildA fruit="Mango"></ChildA>
      <ChildB name="rani" fav="choco"></ChildB>
    </div>
    
    
  );
}

export default App;
