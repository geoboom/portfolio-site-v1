import React, { Component, Fragment } from 'react';
import Slider from 'react-slick';
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

const VisualContent = ({ content }) => {
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

const TextContent = ({ deviceType, title, content, flipped }) => {
  const marginTop = {
    desktop: 0,
    tablet: 20,
    mobile: 20,
  };

  return (
    <div
      style={{
        flex: 1,
        marginTop: marginTop[deviceType],
        marginLeft: deviceType === 'desktop' && !flipped ? 30 : 0,
        marginRight: deviceType === 'desktop' && flipped ? 30 : 0,
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
};

const PortfolioItem = ({ deviceType, flipped, backgroundColor, writeup }) => {
  const render = [
    <TextContent
      deviceType={deviceType}
      title={writeup.title}
      content={writeup.textContent}
      flipped={flipped}
    />,
    <VisualContent content={writeup.visualContent} />,
  ];
  return (
    <div // wrapper
      style={{
        flex: 1,
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        // alignItems: 'center',
        paddingTop: 90,
        // paddingBottom: isDesktopOrLaptop ? 100 : 60,
        paddingBottom: 90,
        backgroundColor,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: deviceType === 'desktop' ? 'row' : 'column',
          width: deviceType === 'desktop' ? '60%' : '85%',
        }}
      >
        {flipped && deviceType === 'desktop' ? (
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
    </div>
  );
};

const PortfolioSection = ({ deviceType }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {writeups.map((stuff, index) => (
        <PortfolioItem
          deviceType={deviceType}
          backgroundColor={index % 2 ? '#e6e6e6' : 'white'}
          writeup={stuff}
          flipped={index % 2 == 1}
        />
      ))}
    </div>
  );
};

export default PortfolioSection;
