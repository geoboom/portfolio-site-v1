import React, { Component } from 'react';
import Scroll from 'react-scroll';
import { slide as Menu } from 'react-burger-menu';
import { GiHamburgerMenu } from 'react-icons/gi';

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
          marginRight: 40,
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
    const { style, deviceType } = this.props;
    const { currSection } = this.state;
    const width = {
      desktop: '60%',
      tablet: '85%',
      mobile: '85%',
    };

    return (
      <div
        style={{
          ...style,
          height: 50,
          width: '100%',
          backgroundColor: '#004080',
          fontSize: 20,
          color: 'white',
          ...(deviceType !== 'mobile'
            ? {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }
            : {}),
        }}
      >
        {deviceType === 'mobile' ? (
          <Menu customBurgerIcon={<GiHamburgerMenu />}>
            {sections.map(({ title, to }, index) =>
              NavItem({
                title,
                to,
                active: currSection === to,
                handleSetActive: this.handleSetActive,
                index,
              }),
            )}
          </Menu>
        ) : (
          <div style={{ width: width[deviceType], paddingBottom: 3 }}>
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
        )}
      </div>
    );
  }
}

export default HeaderBar;
