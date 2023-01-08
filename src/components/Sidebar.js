import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiFillCar } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";

function Sidebar() {
  return (
    <Wrapper>
      <h2 className="title">Motiv</h2>
      <Link to="/" className="nav-item">
        {" "}
        <span className="logo">
          {" "}
          <AiFillCar />{" "}
        </span>{" "}
        Booking
      </Link>
      <Link to="/dashboard" className="nav-item">
        {" "}
        <span className="logo">
          {" "}
          <MdDashboard />{" "}
        </span>{" "}
        Dashboard
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: none;
  position: sticky;
  top: 0;
  left: 0;
  height: 100%;
  padding: 1rem 2rem;
  .title{
    color: var(--clr-primary-5);
  }
  @media (min-width: 992px) {
    display: block;
  }
  background: var(--white);
  box-shadow: var(--shadow-1);
  height: 100%;
  z-index: 10;
  a {
    display: block;
    color: var(--clr-primary-8);
    transition: var(--transition);
    font-size: 1.25rem;
  }
  a:hover {
    border-left: 5px solid var(--clr-primary-7);
    padding-left: 5px;
    color: var(--clr-primary-7);
    background: var(--clr-primary-1);
    transform: scale(1.1);
  }
`;

export default Sidebar;
