import React from 'react';
import './style.css';

export default function Home() {
  return React.createElement(
    'div',
    { className: 'home-container' },
    React.createElement(
      'div',
      { className: 'content-wrapper' },
      // Left side: Home content
      React.createElement(
        'div',
        { className: 'home-text' },
        React.createElement('h1', { className: 'home-title' }, 'Home'),
        React.createElement(
          'p',
          { className: 'home-description' },
          'The "Homepage" of a typical firm features the company name, logo, tagline, navigation, hero image, call to action, key offerings, testimonials, social media links, and footer. This design aims to introduce the company and its services or products effectively.'
        )
      ),
      // Right side: Image
      React.createElement(
        'div',
        { className: 'home-image-container' },
        React.createElement('img', {
          src: '/home.PNG',
          alt: 'Home',
          className: 'home-image',
        })
      )
    )
  );
}
