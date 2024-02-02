import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from "./Hero";
import SpecialDishes from "./SpecialDishes";
import DishesFiltered from "./DishesFiltered";
import { AllMenus } from './AllMenuContext';
import Checkout from './Checkout';
import Footer from './Footer';
import { AppProvider } from '../context/AppProvider';


function HomePage() {
   return (
      <>
         <SpecialDishes />
         <DishesFiltered />
      </>
   );
}


function Menus() {

   return (
      <div>
         <Router>
            <AppProvider>
               <AllMenus>
                  <Hero />
                  <Routes>
                     <Route path="/" element={<HomePage />} />
                     <Route path="/simply-recipes" element={<HomePage />} />
                     <Route path='/specialdishes' element={<SpecialDishes />} />
                     <Route path='/dishesfiltered' element={<DishesFiltered />} />
                     <Route path="/checkout" element={<Checkout />} />
                  </Routes>
                  <Footer />
               </AllMenus>
            </AppProvider>
         </Router>
      </div>
   );


}


export default Menus;