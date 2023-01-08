import React from "react";
import styled from "styled-components";
import { RIcon, RepIcon, GearIcon, EnergyIcon } from "../assets/icons";

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
      <h4 className="card-title">{name}</h4>
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
  display: grid;
  grid-template-rows: 2rem 1fr 2rem 2rem;
  .card-img-container{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  box-shadow: var(--shadow-3);
  @media (min-width: 768px){
    width: 100%;
  }
  margin: 0 auto;
  padding: 1rem 2rem;
  background: var(--white);
  border-radius: var(--borderRadius);
  .recommended {
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    column-gap: 5px;
    font-weight: 600;
  }
  .card-title {
    letter-spacing: normal;
  }
  .card-info {
    display: flex;
    justify-content: space-between;
  }
  .car-stats {
    display: flex;
    column-gap: 15px;
    align-items: center;
    font-size: 1.25rem;
    
  }
  svg{
    transform: scale(1.25);


`;

export default SingleCarStats;
