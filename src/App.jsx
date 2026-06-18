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
// import ResultsSection from './components/ResultsSection/ResultsSection';
import HappySmilers from './components/HappySmilers/HappySmilers';
import FAQSection from './components/FAQSection/FAQSection';

function App() {
  return (
    <div className="whistle-app">
      <Banner />
      <ScanForm />
      <PromoCard />
      <ProductDetails />
      <ResultsShowcase />
      {/* <ResultsSection/> */}
      <WhyUs />
      <Apart />
      <Process />
      <OurDoctor />
      {/* <HappyCustomers /> */}
      <HappySmilers/>
      {/* <FAQ /> */}
      <FAQSection/>
      <Footer />
      <Booking />
    </div>
  );
}

export default App;