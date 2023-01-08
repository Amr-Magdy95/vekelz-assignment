import React, { useState } from "react";
import styled from "styled-components";
import { IoNotificationsSharp } from "react-icons/io5";
import { FaUserCircle, FaBars } from "react-icons/fa";
import { AiOutlineSearch, AiFillCar } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

function Navbar() {
  const [showContent, setShowContent] = useState(false);
  return (
    <Wrapper>
      <div className="header">
        <div className="search-container">
          <AiOutlineSearch />
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
        className={`${
          showContent ? "nav-content show-content" : "nav-content"
        }`}
      >
        <div className="nav-links">
          <Link to="/">
            {" "}
            <AiFillCar /> Booking{" "}
          </Link>
          <Link to="/">
            {" "}
            <MdDashboard /> Dashboard{" "}
          </Link>
        </div>
        <div className="nav-icons">
          <span>
            {" "}
            <IoNotificationsSharp />
          </span>
          <span>
            {" "}
            <FaUserCircle />
          </span>
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
  @media (min-width: 992px){
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
    padding: 5px;
    width: 20rem;
    display: flex;
    align-items: center;
    background: var(--clr-grey-2);
    border-radius: var(--borderRadius);
    svg {
      font-size: 2rem;
      color: var(--clr-primary-4);
    }
    input {
      background: var(--clr-grey-2);
      width: 18rem;
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
  @media (max-width: 992px){
    .nav-content {
      height: 0px;
      overflow: hidden;
      
      transition: var(--transition);
    }
    .show-content {
      height: 160px;
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
`;

export default Navbar;
