import React from 'react'
import Car4 from '../../assets/Car4.jpeg'
import Car5 from '../../assets/Car5.jpeg'
import Car6 from '../../assets/Car6.jpeg'
import Car7 from '../../assets/Car7.jpeg'

const Gallery = () => {
  return (
    <div className='row'>
      <div className='col-3'>
      <div className="card" style={{width: '18rem'}}>
  <img src={Car4} className="card-img-top" height='180px' alt="car4"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>

      </div>
    
</div>
<div className='col-3'>
<div className="card" style={{width: ' 18rem'}}>
  <img src={Car5} className="card-img-top" height='180px' alt="car5"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

</div>
<div className='col-3'>
<div className="card" style={{width: ' 18rem'}}>
  <img src={Car6} className="card-img-top" height='180px' alt="car6"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

</div>
<div className='col-3'>
<div className="card" style={{width: ' 18rem'}}>
  <img src={Car7} className="card-img-top" height='180px' alt="car7"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        
      
    </div>
    <div className='col-3 mt-5'>
      <div className="card" style={{width: '18rem'}}>
  <img src={Car4} className="card-img-top" height='180px' alt="car4"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>

      </div>
    
</div>

<div className='col-3 mt-5' >
<div className="card" style={{width: ' 18rem'}}>
  <img src={Car5} className="card-img-top" height='180px' alt="car5"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

</div>
<div className='col-3 mt-5'>
<div className="card" style={{width: ' 18rem'}}>
  <img src={Car6} className="card-img-top" height='180px' alt="car6"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

</div>
<div className='col-3 mt-5'>
<div className="card" style={{width: ' 18rem'}}>
  <img src={Car7} className="card-img-top" height='180px' alt="car7"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        
      
    </div>


</div>



  )
}

export default Gallery
