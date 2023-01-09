import React, { useState } from "react";
import SingleCar from "./SingleCar";
import { cars } from "../data";
import styled from "styled-components";
import { DashIcon, View } from "../assets/icons";

function Booking() {
  const [allCars, setAllCars] = useState(cars);

  const setFavorite = (id) => {
    console.log(id);
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
    <div style={{ marginTop: "6rem", padding: "1rem 1.5rem" }}>
      <h2>Booking</h2>
      <div
        className="filters"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div
          className="car-filters"
          style={{
            display: "flex",
            columnGap: "15px",
            alignSelf: "flex-start",
          }}
        >
          <select
            name=""
            id=""
            style={{
              borderRadius: "20px 20px 20px 20px",
              borderColor: "var(--clr-grey-1)",
              width: "8rem",
              padding: "5px 10px",
              letterSpacing: "var(--letterSpacing)",
              color: "var(--clr-grey-5)",
              fontWeight: "600",
              height: "2rem",
            }}
          >
            <option value="">New</option>
            <option value="">Used</option>
          </select>
          <select
            name=""
            id=""
            style={{
              borderRadius: "20px 20px 20px 20px",
              borderColor: "var(--clr-grey-1)",
              width: "8rem",
              padding: "5px 10px",
              letterSpacing: "var(--letterSpacing)",
              color: "var(--clr-grey-5)",
              fontWeight: "600",
              height: "2rem",
            }}
          >
            <option value="">Toyota</option>
            <option value="">Porsche</option>
          </select>
        </div>

        <div
          className="view-filters"
          style={{ alignSelf: "flex-end", display: "flex", columnGap: "15px" }}
        >
          <div
            style={{
              height: "2rem",
              width: "2rem",
              borderRadius: "50%",
              backgroundColor: "var(--white)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <DashIcon />
          </div>
          <div
            style={{
              height: "2rem",
              width: "2rem",
              borderRadius: "50%",
              backgroundColor: "var(--clr-purple-dark)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View />
          </div>
        </div>
      </div>
      <Wrapper>
        {allCars.map((car) => {
          return <SingleCar key={car.id} setFavorite={setFavorite} {...car} />;
        })}
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.section`
  display: grid;
  margin-left: 0;
  align-items: center;
  grid-row-gap: 2rem;
  padding: 2rem 1rem;
  grid-column-gap: 2rem;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

export default Booking;
