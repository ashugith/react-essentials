import React from 'react'
import { Container, Row , Col } from 'react-bootstrap'
import Burger from "../../assets/hero/hero-2.png"

function Section1() {
  return (
    <section className='hero_section'>
      <Container>
        <Row>
          <Col lg={7} className="mb-5 mb-lg-0">
            <div className='position:relative'>
                <img src={Burger} className='img-fluid' alt="Hero"/>
                <div className='price_badge'>
                  <div className='badge_text'>
                    <h4 className='h4_xs'>Only</h4>
                    <h4 className='h3_lg'>$6.99</h4>
                    
                  </div>
                </div>
            </div>
          </Col>
        </Row>
      </Container>

    </section>
  )
}

export default Section1
