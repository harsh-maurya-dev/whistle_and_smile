import React from 'react';
import Banner from './components/Banner/Banner';
import ScanForm from './components/ScanForm/ScanForm';
import PromoCard from './components/PromoCard/PromoCard';
import ProductDetails from './components/ProductDetails/ProductDetails';
import ResultsShowcase from './components/ResultsShowcase/ResultsShowcase';
import WhyUs from './components/WhyUs/WhyUs';
import Apart from './components/Apart/Apart';
import Process from './components/Process/Process';
import OurDoctor from './components/OurDoctor/OurDoctor';
import HappyCustomers from './components/HappyCustomers/HappyCustomers';
import FAQ from './components/FAQ/FAQ';
import Booking from './components/Booking/Booking';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="whistle-app">
      <Banner />
      <ScanForm />
      <PromoCard />
      <ProductDetails />
      <ResultsShowcase />
      <WhyUs />
      <Apart />
      <Process />
      <OurDoctor />
      <HappyCustomers />
      <FAQ />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
