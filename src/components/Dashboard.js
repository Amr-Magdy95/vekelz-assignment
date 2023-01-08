import styled from 'styled-components'
import React, { useRef, useLayoutEffect } from 'react';
import Progress from './charts/Progress';
import CarStats from './CarStats';


function Dashboard(props) {
  return <Wrapper>
    <Progress />
    <CarStats />


  </Wrapper>
}

const Wrapper = styled.section`
  margin-top: 7rem;
`
export default Dashboard;