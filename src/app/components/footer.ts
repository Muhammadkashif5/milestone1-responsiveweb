import React from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './style3.css';

export default function Footer() {
  return React.createElement(
    'footer',
    { className: 'footer-container' },
    React.createElement(
      'div',
      { className: 'footer-content' },
      // Footer Text
      React.createElement(
        'p',
        { className: 'footer-text' },
        'Design & Developed By'
      ),
      React.createElement(
        'p',
        { className: 'footer-name' },
        'Muhammad Kashif'
      ),
      // Social Media Icons
      React.createElement(
        'div',
        { className: 'social-icons' },
        React.createElement(
          'a',
          {
            href: 'https://www.instagram.com/muhammad_kashif164',
            target: '_blank',
            rel: 'noopener noreferrer',
            className: 'social-link instagram',
          },
          React.createElement(FaInstagram, { size: 30 })
        ),
        React.createElement(
          'a',
          {
            href: 'https://www.linkedin.com/in/muhammad-kashif7016',
            target: '_blank',
            rel: 'noopener noreferrer',
            className: 'social-link linkedin',
          },
          React.createElement(FaLinkedin, { size: 30 })
        ),
        React.createElement(
          'a',
          {
            href: 'mailto:muhammad.kashif7016992@gmail.com',
            target: '_blank',
            rel: 'noopener noreferrer',
            className: 'social-link email',
          },
          React.createElement(FaEnvelope, { size: 30 })
        )
      )
    )
  );
}
