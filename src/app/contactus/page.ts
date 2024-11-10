import React from 'react';
import './style5.css';

export default function ContactUs() {
  return React.createElement(
    'div',
    { className: 'contact-container' },
    React.createElement(
      'div',
      { className: 'contact-content-wrapper' },
      // Left side: Contact Us content
      React.createElement(
        'div',
        { className: 'contact-text' },
        React.createElement('h1', { className: 'contact-title' }, 'Contact Us'),
        React.createElement(
          'p',
          { className: 'contact-description' },
          'A "Contact Us" page provides guidance for existing customers and offers an overview of your brand for new visitors. A strong Contact Us page should contain several elements, such as a phone number and links to social media channels. It should also be easy to navigate, as this makes for a positive customer experience.'
        )
      ),
      // Right side: Image
      React.createElement(
        'div',
        { className: 'contact-image-container' },
        React.createElement('img', {
          src: '/contact.PNG',
          alt: 'About Us',
          className: 'contact-image',
        })
      )
    )
  );
}
