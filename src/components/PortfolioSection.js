import React, { Component, Fragment } from 'react';
import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

import writeups from './writeups';
import './PortfolioSection.css';

const SamplePrevArrow = props => {
  const { onClick } = props;
  return (
    <button
      type="button"
      className="slick-arrow"
      onClick={onClick}
      style={{
        position: 'absolute',
        top: '45%',
        left: '-25px',
        zIndex: 1,
        cursor: 'pointer',
        backgroundColor: 'Transparent',
        border: 'none',
      }}
    >
      <MdKeyboardArrowLeft size={50} />
    </button>
  );
};

const SampleNextArrow = props => {
  const { onClick } = props;
  return (
    <button
      type="button"
      className="slick-arrow"
      style={{
        position: 'absolute',
        top: '45%',
        right: '-25px',
        zIndex: 1,
        cursor: 'pointer',
        backgroundColor: 'Transparent',
        border: 'none',
      }}
      onClick={onClick}
    >
      <MdKeyboardArrowRight size={50} />
    </button>
  );
};

const VisualContent = ({ isDesktopOrLaptop, content }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const imgResponsiveStyle = {
    width: '45%',
    maxWidth: '275px',
    height: 'auto',
  };

  return (
    <div
      style={{
        flex: 1.5,
        minWidth: '0px',
      }}
    >
      <Slider style={{ zIndex: 1, width: '100%' }} {...settings}>
        {content.map(x => (
          <div style={{ display: 'flex', flexDirection: 'column' }}>{x}</div>
        ))}
      </Slider>
    </div>
  );
};

const TextContent = ({ isDesktopOrLaptop, title, content, flipped }) => (
  <div
    style={{
      flex: 1,
      marginTop: isDesktopOrLaptop ? 0 : 20,
      marginLeft: isDesktopOrLaptop && !flipped ? 30 : 0,
      marginRight: isDesktopOrLaptop && flipped ? 30 : 0,
    }}
  >
    <h1
      style={{
        margin: 0,
        fontSize: 22,
        display: 'inline-block',
        color: 'purple',
      }}
    >
      {title}
    </h1>
    <br />
    {content}
  </div>
);

const PortfolioItem = ({
  isDesktopOrLaptop,
  flipped,
  backgroundColor,
  writeup,
}) => {
  const render = [
    <TextContent
      isDesktopOrLaptop={isDesktopOrLaptop}
      title={writeup.title}
      content={writeup.textContent}
      flipped={flipped}
    />,
    <VisualContent
      isDesktopOrLaptop={isDesktopOrLaptop}
      content={writeup.visualContent}
    />,
  ];
  return (
    <div // wrapper
      style={{
        flex: 1,
        flexDirection: isDesktopOrLaptop ? 'row' : 'column',
        display: 'flex',
        width: isDesktopOrLaptop ? '60%' : '85%',
        paddingBottom: isDesktopOrLaptop ? 100 : 60,
        // backgroundColor,
      }}
    >
      {flipped && isDesktopOrLaptop ? (
        <Fragment>
          {render[0]}
          {render[1]}
        </Fragment>
      ) : (
        <Fragment>
          {render[1]}
          {render[0]}
        </Fragment>
      )}
    </div>
  );
};

const PortfolioSection = () => {
  const isDesktopOrLaptop = useMediaQuery({
    minWidth: 1224,
  });

  return (
    <div
      style={{
        paddingTop: 90,
        backgroundColor: '#e6e6ff',
        // backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {writeups.map((stuff, index) => (
        <PortfolioItem
          isDesktopOrLaptop={isDesktopOrLaptop}
          backgroundColor="white"
          writeup={stuff}
          flipped={index % 2 == 1}
        />
      ))}
    </div>
  );
};

export default PortfolioSection;
