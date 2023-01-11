import React, { useState } from "react";
import SingleCar from "./SingleCar";
import { cars } from "../../data";
import styled from "styled-components";
import { DashIcon, View } from "../../assets/icons";

function Booking() {
  const [allCars, setAllCars] = useState(cars);

  const setFavorite = (id) => {
    setAllCars((prevCars) => {
      console.log(prevCars);
      return prevCars.map((item) => {
        if (item.id === id) {
          return { ...item, favorite: !item.favorite };
        }
        return item;
      });
    });
  };
  return (
    <Container style={{ marginTop: "6rem", padding: "1rem 1.5rem" }}>
      <h2>Booking</h2>
      <div className="filters">
        <div className="car-filters">
          <select name="" id="">
            <option value="">New</option>
            <option value="">Used</option>
          </select>
          <select name="" id="">
            <option value="">Toyota</option>
            <option value="">Porsche</option>
          </select>
        </div>

        <div className="view-filters">
          <div className="dash-icon">
            <DashIcon />
          </div>
          <div className="view-icon">
            <View />
          </div>
        </div>
      </div>
      <Wrapper>
        {allCars.map((car) => {
          return <SingleCar key={car.id} setFavorite={setFavorite} {...car} />;
        })}
      </Wrapper>
    </Container>
  );
}
const Container = styled.main`
h2{
  letter-spacing: normal;
}
.view-filters {
  align-self: flex-end;
  justify-content: center;
  display: flex;
  column-gap: 15px;
}
.car-filters{
  display: flex;
  justify-content: center;
  column-gap: 15px;
  margin-bottom: 1rem;
}


@media (min-width: 568px ){
  .filters {
      display: flex;
        justify-content: space-between;
      }
      .car-filters {
        display: flex;
        column-gap: 15px;
        align-self: flex-start;
      }
      .view-filters {
        align-self: flex-end;
        display: flex;
        column-gap: 15px;
      }

  }  
  select {
    border-radius: 20px 20px 20px 20px;
    border-color: var(--clr-grey-1);
    width: 8rem;
    padding: 5px 15px;
    letter-spacing: var(--letterSpacing);
    color: var(--clr-grey-4);
    fontweight: 600;
  
    }
  }
  
  .dash-icon {
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    background: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.2);
  }
  .view-icon {
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    background: var(--clr-purple-dark);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.2);

  }
`;

const Wrapper = styled.section`
  display: grid;
  margin-left: 0;
  align-items: center;
  grid-row-gap: 2rem;
  grid-column-gap: 2rem;
  margin: 0 auto;
  margin-top: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`;

export default Booking;
