import React, { Component } from 'react';
import Scroll from 'react-scroll';
import { useMediaQuery } from 'react-responsive';

import './HeaderBar.css';

const sections = [
  {
    title: 'HOME',
    to: 'homeSection',
  },
  {
    title: 'PORTFOLIO',
    to: 'portfolioSection',
  },
  {
    title: 'ABOUT',
    to: 'aboutSection',
  },
  {
    title: 'CONTACT',
    to: 'contactSection',
  },
];

const NavItem = ({ title, to, active, handleSetActive, index }) => {
  return (
    <Scroll.Link
      key={title}
      to={to}
      offset={index === 0 ? 0 : 5}
      spy
      smooth
      duration={500}
      delay={50}
      onSetActive={handleSetActive}
      ignoreCancelEvents
    >
      <a
        className="navLink"
        style={{
          paddingRight: 40,
          cursor: 'pointer',
          ...(active ? { color: 'yellow' } : {}),
        }}
      >
        {title}
      </a>
    </Scroll.Link>
  );
};

// eslint-disable-next-line react/prefer-stateless-function
export class HeaderBar extends Component {
  state = {
    currSection: '',
  };

  componentDidMount() {
    Scroll.scrollSpy.update();
  }

  handleSetActive = to => {
    this.setState({ currSection: to });
  };

  render() {
    // eslint-disable-next-line react/prop-types
    const { style, isDesktopOrLaptop } = this.props;
    const { currSection } = this.state;

    return (
      <div
        style={{
          ...style,
          height: 50,
          width: '100%',
          backgroundColor: '#004080',
          fontSize: 20,
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{ width: isDesktopOrLaptop ? '60%' : '85%', paddingBottom: 3 }}
        >
          {sections.map(({ title, to }, index) =>
            NavItem({
              title,
              to,
              active: currSection === to,
              handleSetActive: this.handleSetActive,
              index,
            }),
          )}
        </div>
      </div>
    );
  }
}

export default HeaderBar;
