import React, { useState, Fragment } from 'react';
import Scroll from 'react-scroll';
import { StickyContainer, Sticky } from 'react-sticky';
import Slider from 'react-slick';

import HomeSection from './components/HomeSection';
import HeaderBar from './components/HeaderBar';
import PortfolioSection from './components/PortfolioSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

const HeaderBarSticky = () => {
  const [navOpacity, setNavOpacity] = useState(0);
  const [topOffset, setTopOffset] = useState(0);
  const [top, setTop] = useState(-50);

  return (
    <Sticky topOffset={topOffset}>
      {({ style, isSticky, wasSticky }) => {
        if (!wasSticky && isSticky) {
          // not sticky -> sticky
          setNavOpacity(1);
          setTopOffset(0);
          setTop(0);
        }

        if (wasSticky && !isSticky) {
          // sticky -> not sticky
          setNavOpacity(0);
          setTopOffset(49);
          setTop(-50);
        }

        return (
          <div
            style={{
              ...style,
              height: 50,
              zIndex: 2,
            }}
          >
            <HeaderBar style={{ opacity: 1 - navOpacity }} />
            <HeaderBar
              style={{
                position: 'fixed',
                opacity: navOpacity,
                top,
                transition: 'top 0.5s',
              }}
            />
          </div>
        );
      }}
    </Sticky>
  );
};

// eslint-disable-next-line arrow-body-style
const App = () => {
  return (
    <div>
      <Scroll.Element name="homeSection">
        <HomeSection />
      </Scroll.Element>
      <StickyContainer>
        <HeaderBarSticky />
        <Scroll.Element name="portfolioSection">
          <PortfolioSection />
        </Scroll.Element>
        <Scroll.Element name="aboutSection">
          <AboutSection />
        </Scroll.Element>
        <Scroll.Element name="contactSection">
          <ContactSection />
        </Scroll.Element>
      </StickyContainer>
    </div>
  );
};

export default App;
