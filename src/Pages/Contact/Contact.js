import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Form from "./Component/Form";

import "./ContactStyles.css";

const Contact = () => {
  return (
    <>
    <Navbar/>
    <Header heading="Contact page"/>
    <Form/>
   <Footer/>
    </>
    
  );
};

export default Contact