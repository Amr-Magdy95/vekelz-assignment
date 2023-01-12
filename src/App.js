import styled from "styled-components";
import { Navbar, Sidebar, Booking, Dashboard } from "./components";
import { Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <Wrapper>
      <BrowserRouter >
        <Sidebar />
        <Navbar />
        <div className="main-container">
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/booking" element={<Booking />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 100%;
  margin-bottom: 5rem;
  @media screen and (min-width: 992px) {
    .main-container{
      margin-left: 20%;
      display: grid;
      grid-column-gap: 0;

    }
  }
`;

export default App;
