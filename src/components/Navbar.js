import React, { useState } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import User from '../assets/images/User.jpg';
import {
  DashboardIcon,
  BookingIcon,
  SearchIcon,
  NotifIcon,
} from "../assets/icons";

function Navbar() {
  const [showContent, setShowContent] = useState(false);

  const handleClick = () => {
    let element = document.getElementById("nav-content");
    element.classList.remove("show-content");
  };
  return (
    <Wrapper>
      <div className="header">
        <div className="search-container">
          <SearchIcon />
          <input type="text" placeholder="Type to Search"></input>
        </div>
        <span
          className="bars"
          onClick={() => {
            setShowContent(!showContent);
          }}
        >
          <FaBars />
        </span>
      </div>
      <div
        id="nav-content"
        className={`${
          showContent ? "nav-content show-content" : "nav-content"
        }`}
      >
        <div className="nav-links">
          <Link to="/" onClick={handleClick}>
            {" "}
            <DashboardIcon /> Dashboard{" "}
          </Link>
          <Link to="/booking" onClick={handleClick}>
            {" "}
            <BookingIcon /> Booking{" "}
          </Link>
        </div>
        <div className="nav-icons">
          <div className="notif-icon">
          <NotifIcon className="" />

          </div>

          <div className="user-icon">
            <img src={User} alt="" className="img" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: 5rem;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  .bars {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 992px) {
    left: 20vw;
  }

  background: var(--white);
  box-shadow: var(--shadow-2);
  z-index: 9;
  width: 100vw;
  .header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .search-container {
    padding: 5px 10px;
    width: 20rem;
    display: flex;
    align-items: center;
    column-gap: 10px;
    background: var(--clr-grey-2);
    border-radius: var(--borderRadius);
    svg {
      transform: scale(1.25);
      color: var(--clr-primary-4);
    }
    input {
      background: var(--clr-grey-2);
      width: 17rem;
      height: 2rem;
      color: var(--clr-primary-4);
      font-size: 1.25rem;
      border-color: transparent;
    }
    input::placeholder {
    }
  }
  .nav-links {
    margin-top: 2rem;
  }
  .nav-links a {
    display: block;
    font-size: 1.5rem;
  }
  .bars {
    transition: var(--transition);
  }
  .nav-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    color: var(--clr-primary-4);
  }
  span {
    font-size: 2rem;
  }
  @media (max-width: 992px) {
    .nav-content {
      height: 0px;
      overflow: hidden;

      transition: var(--transition);
    }
    .show-content {
      height: 170px;
    }
  }

  @media (min-width: 992px) {
    width: 80vw;
    .bars {
      display: none;
    }
    .nav-content {
      display: flex;
    }
    .nav-links {
      display: none;
    }
    display: flex;
  }
  .user-icon{
    height: 40px;
    width: 40px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
      object-fit: cover;
    }
  }
  .notif-icon{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
      transform: scale(1.25);
    }
    &:before{
      position: absolute;
      content: '';
      height: 10px;
      width: 10px;
      background: var(--clr-secondary-6);
      border-radius: 50%;
      top: 0;
      left: 70%;
      z-index: 12;
    }
  }
`;

export default Navbar;
