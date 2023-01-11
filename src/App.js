import styled from "styled-components";
import { Navbar, Sidebar, Booking, Dashboard } from "./components";
import { Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Sidebar />
        <div>
          <Navbar />
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
  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-column-gap: 0;
  }
`;

export default App;
