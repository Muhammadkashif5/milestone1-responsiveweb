import React from 'react';
import './style1.css';

export default function About() {
  return React.createElement(
    'div',
    { className: 'about-container' },
    React.createElement(
      'div',
      { className: 'content-wrapper' },
      // Left side: About content
      React.createElement(
        'div',
        { className: 'about-text' },
        React.createElement('h1', { className: 'about-title' }, 'About'),
        React.createElement(
          'p',
          { className: 'about-description' },
          'The "About" section of a firm typically contains information about the company\'s history, mission, values, team, achievements, and testimonials. It aims to provide visitors with a clear understanding of the company\'s identity and why they should choose the firm.'
        )
      ),
      // Right side: Image
      React.createElement(
        'div',
        { className: 'about-image-container' },
        React.createElement('img', {
          src: '/about.PNG',
          alt: 'About Us',
          className: 'about-image',
        })
      )
    )
  );
}
