import React, { useState } from 'react'
import styled from 'styled-components'
import SingleCarStats from './SingleCarStats'
import { carStats } from '../../data';

function CarStats() {
  const [cars, setCars] = useState(carStats);
  return (
    <Wrapper>{
      cars.map( (car)=>{
        return <SingleCarStats  key={car.id} {...car} />
      })
      }</Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-row-gap: 2rem;
  grid-column-gap: 1rem;
  padding: 1rem 2rem;

  @media (min-width: 768px){
    grid-template-columns: repeat(auto-fit, minmax(48%, 1fr));
  }

  @media (min-width: 1170px){
    grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
  }

`

export default CarStats