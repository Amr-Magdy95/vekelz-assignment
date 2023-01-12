import React from "react";
import styled from "styled-components";

import {
  GearIcon2,
  PassengerIcon,
  EmptyHeart,
  FullHeart,
} from "../../assets/icons";

function SingleCar({
  name,
  img,
  type,
  gear_type,
  passengers,
  rental_price,
  favorite,
  setFavorite,
  id,
}) {
  return (
    <Wrapper className="container">
      <div className="header">
        <h5>{name}</h5>
        <span onClick={() => setFavorite(id)}>
          {" "}
          {favorite ? <FullHeart /> : <EmptyHeart />}{" "}
        </span>
      </div>
      <p className="car-type">{type}</p>
      <div className="car-img-container">
        <img src={img} alt="" className="car-img img" />
      </div>
      <div className="footer">
        <div className="info">
          <PassengerIcon /> {passengers}
          <GearIcon2 /> {gear_type}
        </div>
        <div className="price-container">
          {" "}
          <span className="price">${rental_price}</span>/d
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  min-width: 240px;
  h5{
    font-size: 1rem;
    
  }
  transition: var(--transition);
  box-shadow: var(--shadow-1);

  &:hover {
    transform: scale(1.05);
    box-shadow: var(--shadow-4);
  }

  padding: 1.25rem 1rem;
  background: var(--white);
  border-radius: var(--borderRadius);
  .header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    span {
      cursor: pointer;
    }
    svg {
      font-size: 1.5rem;
      color: var(--clr-secondary-6);
    }
    margin-bottom: -30px;
    h5 {
      font-weight: 700;
      letter-spacing: normal;
    }
  }
  .car-type {
    color: var(--clr-grey-5);
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
  }
  display: grid;
  grid-template-rows: 1rem 1rem 1fr  1rem;
  .card-img-container{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .car-img{
    height: 6rem;
    width: 12rem;
    margin: 0 auto;
  }
  .footer {
    display: flex;
    justify-content: space-between;
  }
  .passengers {
    margin-right: 1rem;
  }
  .price-container {
    font-size: 1rem;
    color: var(--clr-grey-4);
  }
  .price {
    color: var(--clr-grey-6);
    font-weight: 900;
    letter-spacing: var(--letterSpacing);
  }
  .info {
    display: flex;
    align-items: center;
    justify-content:center;
    column-gap: 8px;
    text-transform: capitalize;
  }
  .passengers,
  .gear-type {
    display: flex;
    align-items: center;
    text-transform: capitalize;
    color: var(--clr-grey-7);
    gap: 5px;
    svg {
      font-size: 0.875rem;
    }
  }
`;

export default SingleCar;
