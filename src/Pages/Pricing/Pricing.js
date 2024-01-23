import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Cards from "./Component/Cards";

import "./PricingStyles.css";

const Pricing = () => {
  return (
    <>
    <Navbar/>
    <Header heading="Pricing page"/>
    <Cards/>
   <Footer/>
    </>
    
  );
};

export default Pricing