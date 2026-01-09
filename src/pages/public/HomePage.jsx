import React from "react";
import { Fragment } from "react";
import Navbar from "../../Components/Navbar";
import Section1 from "../../Components/Section1";
import Section2 from "../../Components/Section2";
import Section3 from "../../Components/Section3";
import Section4 from "../../Components/Section4";
import Footer from "../../Components/Footer";
function HomePage() {
  return (
    <Fragment>
      <main>
        <Section1></Section1>
        <Section2></Section2>
        <Section3></Section3>
        <Section4></Section4>
      </main>
      <Footer></Footer>
    </Fragment>
  );
}

export default HomePage;
