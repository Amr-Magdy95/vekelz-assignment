import React from "react";
import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";

import { GearIcon2, PassengerIcon, EmptyHeart, FullHeart } from "../assets/icons";

function SingleCar({
  name,
  img,
  type,
  gear_type,
  passengers,
  rental_price,
  favorite,
  setFavorite,
  id
}) {
  return (
    <Wrapper className="container">
      <div className="header">
        <h5>{name}</h5>
        <span onClick={()=>setFavorite(id)}> {favorite ? <FullHeart /> : <EmptyHeart />} </span>
      </div>
      <p className="car-type">{type}</p>
      <div className="car-img-container">
        <img src={img} alt="" className="car-img img" />
      </div>
      <div className="footer">
        <div className="info">
          <span className="passengers">
            {" "}
            <PassengerIcon /> {passengers}
          </span>
          <span className="gear-type">
            {" "}
            <GearIcon2 /> {gear_type}
          </span>
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
  min-width: 300px;
  transition: var(--transition);
  box-shadow: var(--shadow-1);

  &:hover {
    transform: scale(1.05);
    box-shadow: var(--shadow-4);
  }

  padding: 10px 10px 5px 10px;
  background: var(--white);
  border-radius: var(--borderRadius);
  .header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
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
  .car-img {
    height: 10rem;
    object-fit: cover;
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
    color: var(--clr-grey-9);
    font-weight: 900;
    letter-spacing: var(--letterSpacing);
  }
  .info {
    display: flex;
    align-items: center;
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
