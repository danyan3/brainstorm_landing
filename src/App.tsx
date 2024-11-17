import React from "react";
import Header from "@components/Header";
import MainBlock from "@components/MainBlock";
import OfferBlock from "@components/OfferBlock";
import WhomBlock from "@components/WhomBlock";
import SolutionBlock from "@components/SolutionBlock";
import UsageBlock from "@components/UsageBlock";
import Footer from "@components/Footer";
import {
  ParallaxBanner,
  ParallaxBannerLayer,
  ParallaxProvider,
} from "react-scroll-parallax";
import preview from "@assets/images/bg1.png";

const App: React.FC = () => {
  return (
    <ParallaxProvider>
      <ParallaxBanner
        style={{
          overflow: "unset",
        }}
      >
        <div id="app">
          <Header />
          <main>
            <ParallaxBannerLayer
              className="parallax-bg"
              expanded={false}
              rootMargin={{
                top: 3000,
                bottom: 2000,
                left: 0,
                right: 0,
              }}
              image={preview}
              speed={-150}
            />

            <MainBlock />
            <OfferBlock />
            <WhomBlock />
            <SolutionBlock />
            <UsageBlock />
          </main>
          <Footer />
        </div>
      </ParallaxBanner>
    </ParallaxProvider>
  );
};

export default App;
