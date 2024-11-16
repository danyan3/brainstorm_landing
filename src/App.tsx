import React from "react";
import Header from "@components/Header";
import MainBlock from "@components/MainBlock";
import OfferBlock from "@components/OfferBlock";
import WhomBlock from "@components/WhomBlock";
import SolutionBlock from "@components/SolutionBlock";
import UsageBlock from "@components/UsageBlock";
import Footer from "@components/Footer";
import { ParallaxProvider } from "react-scroll-parallax";

const App: React.FC = () => {
  return (
    <ParallaxProvider>
      <div id="app">
        <Header />
        <main>
          <MainBlock />
          <OfferBlock />
          <WhomBlock />
          <SolutionBlock />
          <UsageBlock />
        </main>
        <Footer />
      </div>
    </ParallaxProvider>
  );
};

export default App;
