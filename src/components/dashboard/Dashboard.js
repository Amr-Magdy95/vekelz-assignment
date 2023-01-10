import styled from 'styled-components'
import React from 'react';
import Progress from './charts/Progress';
import CarStats from './CarStats';
import BarChart from './charts/BarChart';
import LineChart from './charts/LineChart';


function Dashboard(props) {
  return <Wrapper>
    <Progress />
    <div className="chart-container">
      <BarChart />
      <LineChart />
    </div>
    <CarStats />


  </Wrapper>
}

const Wrapper = styled.section`
  margin-top: 7rem;
  padding: 1rem 2rem;
  

  }
`
export default Dashboard;