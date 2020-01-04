/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import Scroll from 'react-scroll';

import './HomeSection.css';

const colors = {
  primary: '#120D31',
  secondary: 'white',
  tertiary: '#F0D3F7',
  s1: '#F0D3F7',
  s2: '',
};

const viewPortfolioClick = () => {
  Scroll.scroller.scrollTo('portfolioSection', {
    duration: 500,
    delay: 50,
    smooth: true,
    offset: 10,
    ignoreCancelEvents: true,
  });
};

// eslint-disable-next-line react/prefer-stateless-function
export class HomeSection extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: colors.primary,
          textAlign: 'center',
          height: '100vh',
          fontSize: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              color: colors.tertiary,
              marginBottom: 20,
            }}
          >
            Hello, I'm <span style={{ color: colors.secondary }}>Georgie</span>
            .
            <br />
            I'm a full-stack developer.
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div style={{ flex: 1 }} />
            <button
              type="button"
              onClick={viewPortfolioClick}
              style={{
                flex: 1,
                fontSize: 20,
                color: colors.secondary,
                borderStyle: 'solid',
                padding: 15,
                cursor: 'pointer',
                transition: 'all 0.35s ease-in-out',
              }}
              id="viewWorkButton"
            >
              View my work
            </button>
            <div style={{ flex: 1 }} />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeSection;
