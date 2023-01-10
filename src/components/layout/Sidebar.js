import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Logo, DashboardIcon, BookingIcon } from "../../assets/icons";

function Sidebar() {
  return (
    <Wrapper>
      <div className="header">
        <div className="logo-container">
          <Logo />
        </div>
        <h2>Motiv.</h2>
      </div>
      <Link to="/" className="nav-item">
        {" "}
        <span className="logo">
          {" "}
          <DashboardIcon />{" "}
        </span>{" "}
        Dashboard
      </Link>
      <Link to="/booking" className="nav-item">
        {" "}
        <span className="logo">
          {" "}
          <BookingIcon />{" "}
        </span>{" "}
        Booking
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
  background: var(--white);
  box-shadow: var(--shadow-1);
  height: 100%;
  z-index: 10;
  .header {
    margin-bottom: 2rem;
    margin-top: 0.75rem;
    display: flex;
    column-gap: 0.5rem;
  }
  .logo-container {
    display: flex;
    width: 3rem;
    justify-content: center;
    align-items: center;
    height: 3rem;
    border-radius: 1rem;
    background: var(--clr-purple-dark);
    padding: 0.5rem 1rem;

    svg {
      transform: scale(2);
    }
  }
  @media (min-width: 992px) {
    display: block;
  }

  a {
    display: block;
    color: var(--clr-purple-dark);
    transition: var(--transition);
    font-size: 1.25rem;
  }
  a:hover {
    border-left: 5px solid var(--clr-primary-1);
    padding-left: 10px;
    color: var(--clr-primary-1);
    background: var(--clr-grey-1);
    transform: scale(1.1);
  }
`;

export default Sidebar;
