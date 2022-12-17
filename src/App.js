import logo from './logo.svg';
import './App.css';
import NavbarCommon from './common/Navbar.js';
import MainItems from './MainItems.js';
import items from './data.js'
import { useState } from 'react';
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/Detail.js'

function App() {
  let [datalist] = useState(items);
  

  return (
    <>
      <NavbarCommon />
      <Routes>
        <Route path="/" element={
          <>
            <img src={logo} className="App-logo" alt="logo" />
            <div>
              {
                datalist.map((item, index) => {
                  return (
                    <MainItems itemImage={item.image} itemTitle={item.title} itemDescription={item.content} itemPrice={item.price} key={index} />
                  )
                })
              }
            </div>
          </>
        } />
        <Route path="/detail" element={<Detail />} />
        <Route path="*" element={<div>없는 페이지요~</div>} />
      </Routes>

    </>
  );
}

export default App;
