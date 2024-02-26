import React from 'react'
import Car4 from '../../assets/Car4.jpeg';
import Car6 from '../../assets/Car6.jpeg'
import Car7 from '../../assets/Car7.jpeg'
const Home = () => {
  return (
    <div>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="2000">
      <img src={Car4} className="img w-100" alt="Car1"/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={Car6} className="img w-100" alt="Car2"/>
    </div>
    <div className="carousel-item">
      <img src={Car7} className="img w-100" alt="Car3"/>
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
