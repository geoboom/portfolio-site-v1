import React, { Component } from 'react';
import Scroll from 'react-scroll';

import './HeaderBar.css';

const sections = [
  {
    title: 'Home',
    to: 'homeSection',
  },
  {
    title: 'Portfolio',
    to: 'portfolioSection',
  },
  {
    title: 'About',
    to: 'aboutSection',
  },
  {
    title: 'Contact',
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
          padding: 5,
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
    const { style } = this.props;
    const { currSection } = this.state;

    return (
      <div
        style={{
          ...style,
          height: 50,
          width: '100%',
          backgroundColor: '#5B1865',
          fontSize: 20,
          textAlign: 'center',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
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
    );
  }
}

export default HeaderBar;
