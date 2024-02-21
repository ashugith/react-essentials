import React from 'react'
import Car1 from '../../assets/Car1.jpeg';
import Car2 from '../../assets/Car2.jpeg'
import Car3 from '../../assets/Car3.jpeg'
const Home = () => {
  return (
    <div>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="2000">
      <img src={Car1} className="d-block w-100" height="640px"alt="Car1"/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={Car2} className="d-block w-100" height="640px" alt="Car2"/>
    </div>
    <div className="carousel-item">
      <img src={Car3} className="d-block w-100" height="640px" alt="Car3"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      
    </div>
  )
}

export default Home
