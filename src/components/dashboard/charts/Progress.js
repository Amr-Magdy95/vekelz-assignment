import React from "react";
import styled from "styled-components";
import { Energy2, ArrowIcon, DropletIcon, TireIcon } from "../../../assets/icons";

function Progress() {
  return (
    <Wrapper>
      <div className="progress-card energy">
        <div className="progress-icon">
          <Energy2 />
        </div>
        <h4 className="progress-title">Energy</h4>
        <div className="ui-widgets">
          <div className="ui-values">45%</div>
        </div>
      </div>
      <div className="progress-card range">
        <div className="progress-icon">
          <ArrowIcon />
        </div>
        <h4 className="progress-title">Range</h4>
        <div className="ui-widgets">
          <div className="ui-values">157K%</div>
        </div>
      </div>
      <div className="progress-card fluid">
        <div className="progress-icon">
          <DropletIcon />
        </div>
        <h4 className="progress-title">Break Fluid</h4>
        <div className="ui-widgets">
          <div className="ui-values">9%</div>
        </div>
      </div>
      <div className="progress-card tire-wear">
        <div className="progress-icon">
          <TireIcon />
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
  .progress-title {
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
      transform: scale(1.5);
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
    background: var(--clr-purple-dark);
    color: var(--white);
    transition: var(--transition);
  }
  .energy .progress-icon {
    background: var(--clr-purple-light);
  }
  .energy .ui-widgets {
    border-bottom-color: var(--clr-purple-dark);
    border-right-color: var(--clr-grey-1);
    border-top-color: var(--clr-grey-1);
  }
  .energy:hover {
    transform: scale(1.05);
    box-shadow: var(--shadow-4);
  }
  .range {
    background: var(--white);
    transition: var(--transition);
  }
  .range .progress-icon {
    background: var(--clr-pink-light);
    svg {
      font-size: 1.875rem;

    }
  }
  .range .ui-widgets {
    border-bottom-color: var(--white);
    border-left-color: var(--clr-pink-dark);
    border-top-color: var(--clr-pink-dark);
    border-right-color: var(--clr-grey-1);
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
    background: var(--clr-grey-1);
    svg {
      color: var(--clr-purple-6);
    }
  }
  .fluid .ui-widgets {
    border-color: var(--clr-grey-1);
    border-bottom-color: var(--white);
    border-left-color: var(--clr-purple-dark);
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
    svg {
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
