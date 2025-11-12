// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./component/Common/Header/Header";
import Footer from "./component/Common/Footer/Footer";
import MainContent from "./component/Common/MainContent/MainContent";
import Login from "./component/Common/Member/login/login";
import BoardList from "./component/Common/Board/BoardList"
import Notice from "./component/Common/Notice/Notice";
import Car from "./component/Common/Car/Car";
import CarDetail from "./component/Common/Car/CarDetail/CarDetail";




const App = () => {
  return (
    <> 
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/boardList" element={<BoardList />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/car" element={<Car />} />
          <Route path="/carDetail" element={<CarDetail />} />
          
        </Routes>
        <Footer />
      
    </>
  );
}; 

export default App;
