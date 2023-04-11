import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Catalog from './Pages/catalog';
import Home from './Pages/home';
import Footer from './Components/Footer/index';
import Website from './Pages/website';
import Bot from './Pages/bots';
import Contacts from './Pages/contacts';
import SeoMain from './Pages/seo';
import 'animate.css';
import './App.css'
import Design from './Pages/design';
import Policy from './Pages/Policy/index';
import NotFound from './Pages/NotFound/NotFound';
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/catalog/websiteDev' element={<Website />} />
        <Route path='/catalog/seo&add' element={<SeoMain />} />
        <Route path='/catalog/design' element={<Design />} />
        <Route path='/catalog/bot' element={<Bot />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/privacy-policy' element={<Policy />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;