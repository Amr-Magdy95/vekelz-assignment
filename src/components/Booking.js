import React, { useState } from 'react'
import SingleCar from './SingleCar';
import { cars } from '../data';
import styled from 'styled-components';

function Booking() {
  const [allCars, setAllCars] = useState(cars);

  const setFavorite = (id) => {
    console.log(id);
    setAllCars(prevCars=>{
      console.log(prevCars);
      return prevCars.map(item=>{
        if ( item.id === id){
          return {...item, favorite: !item.favorite}
        }
        return item;
      })
    })
  }
  return (
    <Wrapper>
      {allCars.map( (car)=>{
        return <SingleCar key={car.id} setFavorite={setFavorite} {...car} />

      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
display: grid;
margin-left: 0;
align-items: center;
grid-row-gap: 2rem;
padding: 10rem 1rem;

grid-column-gap: 2rem;
margin: 0 auto;
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`

export default Booking