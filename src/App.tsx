import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import MainBlock from './MainBlock';
import OfferBlock from './OfferBlock';
import background from './img/background.jpg';
import WhomBlock from './WhomBlock';
import SolutionBlock from './SolutionBlock';
import UsageBlock from './UsageBlock';
import ImportantBlock from './ImportantBlock';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';

const App: React.FC = () => {
  return (
    // <ParallaxProvider>
    //   <ParallaxBanner layers={[
    //     { image: background, speed: -100, expanded: false }
    //   ]}>
        <>
          <Header />
          <Main>
            <MainBlock />
            <OfferBlock />
            <WhomBlock />
            <SolutionBlock />
            <UsageBlock />
            <ImportantBlock />
          </Main>
          <Footer />
        </>
    //   </ParallaxBanner>
    // </ParallaxProvider>
  );
}

export default App;
