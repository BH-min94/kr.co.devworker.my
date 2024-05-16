import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Login from './pages/Main';
import RegisterBoard from './pages/Main';

import Header from './templates/Header';
import Footer from './templates/Footer';
import styled from 'styled-components';

function App() {
  return (
    <Container>
      <Content>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/board/register" element={<RegisterBoard />}></Route>
          </Routes>
        </BrowserRouter>
        <Footer/>
      </Content>
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: #FFFFFF;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
`;