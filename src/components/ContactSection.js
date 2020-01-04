import React, { Component } from 'react';

export class ContactSection extends Component {
  render() {
    return (
      <div
        style={{
          paddingTop: 50,
          height: 1500,
          backgroundColor: 'green',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <h1 style={{ margin: 10 }}>Contact me</h1>
          <div
            style={{
              backgroundColor: 'black',
              width: '10%',
              height: 3,
            }}
          />
        </div>
      </div>
    );
  }
}

export default ContactSection;
