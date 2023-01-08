import styled from "styled-components";
import { Navbar, Sidebar, Booking, Dashboard, Footer } from "./components";
import { Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Sidebar />
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Booking />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-column-gap: 0;
    
  }
`;

export default App;
