import React from "react";
import styled from "styled-components";
import { SlEnergy } from "react-icons/sl";
import { GiFlatTire } from "react-icons/gi";
import { BsFillDropletFill } from "react-icons/bs";
import { FaArrowsAltV } from "react-icons/fa";


function Progress() {
  return (
    <Wrapper>
      <div className="progress-card energy">
        <div className="progress-icon">
          <SlEnergy />
        </div>
        <h4 className="progress-title">Energy</h4>
        <div className="ui-widgets">
          <div className="ui-values">45%</div>
        </div>
      </div>
      <div className="progress-card range">
        <div className="progress-icon">
          <FaArrowsAltV />
        </div>
        <h4 className="progress-title">Range</h4>
        <div className="ui-widgets">
          <div className="ui-values">157K%</div>
        </div>
      </div>
      <div className="progress-card fluid">
        <div className="progress-icon">
          <BsFillDropletFill />
        </div>
        <h4 className="progress-title">Break Fluid</h4>
        <div className="ui-widgets">
          <div className="ui-values">9%</div>
        </div>
      </div>
      <div className="progress-card tire-wear">
        <div className="progress-icon">
          <GiFlatTire />
        </div>
        <h4 className="progress-title">Tire Wear</h4>
        <div className="ui-widgets">
          <div className="ui-values">25%</div>
        </div>
      </div>
    </Wrapper>
  );
}


const Wrapper = styled.section`
  padding: 1rem 2rem;
  .progress-card {
    width: 80%;
    margin-bottom: 1rem;
    margin-left: auto;
    margin-right: auto;
    border-radius: var(--borderRadius);
    padding: 2rem;
    text-align: center;
    box-shadow: var(--shadow-2);
  }
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .progress-card {
      width: 45%;
    }
  }
  @media (min-width: 1170px) {
    .progress-card {
      width: 24%;
    }
  }
  .progress-title{
    font-weight: 900;
  }
  .progress-icon {
    height: 3rem;
    width: 3rem;
    margin: 1rem auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border-color: transparent;
    svg {
      font-size: 2rem;
    }
  }
  .ui-widgets {
    position: relative;
    width: 10rem;
    height: 10rem;
    border-radius: 9rem;
    margin: 0 auto;
    border: 1.2rem solid var(--white);
    text-align: center;
    
  }

  .ui-widgets .ui-values {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 700;
    font-size: 2rem;
  }
  .energy {
    background: var(--clr-purple-6);
    color: var(--white);
    transition: var(--transition);
  }
  .energy .progress-icon {
    background: var(--clr-purple-4);
  }
  .energy .ui-widgets {
    border-bottom-color: var(--clr-purple-6);
    border-right-color: var(--clr-purple-4);
    border-top-color: var(--clr-purple-4);
  }
  .energy:hover {
    transform: scale(1.05);
    background: var(--clr-purple-8);
    box-shadow: var(--shadow-4);
  }
  .energy:hover .ui-widgets {
    border-bottom-color: var(--clr-purple-8);
  }
  .range {
    background: var(--white);
    color: var(--black);
    transition: var(--transition);
  }
  .range .progress-icon {
    background: var(--clr-secondary-2);
    color: var(--clr-secondary-6);
    svg{
        font-size: 1.875rem;
    }
  }
  .range .ui-widgets {
    border-bottom-color: var(--white);
    border-left-color: var(--clr-secondary-6);
    border-top-color: var(--clr-secondary-6);
  }
  .range:hover {
    transform: scale(1.05);
    box-shadow: var(--shadow-4);
  }
  .fluid {
    background: var(--white);
    color: var(--black);
    transition: var(--transition);
  }
  .fluid .progress-icon {
    background: var(--clr-grey-2);
    svg{
        color: var(--clr-purple-6);
    }
  }
  .fluid .ui-widgets {
    border-bottom-color: var(--white);
    border-left-color: var(--clr-purple-6);
  }
  .fluid:hover {
    transform: scale(1.05);
    box-shadow: var(--shadow-4);
  }

  .tire-wear {
    background: var(--white);
    transition: var(--transition);
  }
  .tire-wear .progress-icon {
    background: var(--clr-yellow-light);
    svg{
        color: var(--clr-yellow-dark);
    }
  }
  .tire-wear .ui-widgets {
    border-bottom-color: var(--white);
    border-left-color: var(--clr-yellow-dark);
  }
  .tire-wear:hover {
    transform: scale(1.05);
    box-shadow: var(--shadow-4);
  }  
`;

export default Progress;
