import React from "react";
import styled from "styled-components";
import { RIcon, RepIcon, GearIcon, EnergyIcon } from "../../assets/icons";

function SingleCarStats({ name, recommended, rental_price, img, kms, color }) {
  return (
    <Wrapper style={{background: color}}>
      <div className="recommended">
        <RIcon />
        {recommended}% recommended
      </div>
      <div className="card-img-container">
        <img src={img} alt="" className="card-img img" />
      </div>
      <h5 className="card-title">{name}</h5>
      <div className="card-info">
        <div className="car-stats">
          <RepIcon />
          {kms}K
          <GearIcon />
          <EnergyIcon />
        </div>
        <div className="car-price">${rental_price}/h</div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  width: 80%;
  margin: 0 auto;
  padding: 1rem;
  box-shadow: var(--shadow-3);
  display: grid;
  grid-template-rows: 1rem 1fr 2rem 1rem;
  .card-img-container{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  background: var(--white);
  border-radius: var(--borderRadius);
  .recommended {
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    column-gap: 5px;
    font-weight: 600;
  }
  .card-title {
    letter-spacing: normal;
    font-size: 1rem;
  }
  .card-info {
    display: flex;
    justify-content: space-between;
  }
  .car-stats {
    display: flex;
    column-gap: 15px;
    align-items: center;
    font-size: 0.75rem;
    color: var(--clr-grey-4);
    
  }
  svg{
    transform: scale(.75);
  }

  .car-price{
    font-size: 0.75rem;
    color: var(--clr-grey-4);
  }

  @media (min-width: 768px){
   width: 90%; 
   padding: 1.25rem;
  }

  @media ( min-width: 1170px){
    width: 100%;

  }

  


`;

export default SingleCarStats;
