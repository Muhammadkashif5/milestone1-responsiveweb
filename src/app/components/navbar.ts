import React from 'react';
import Link from 'next/link';
import './style2.css';

export default function Navbar() {
  return React.createElement(
    'nav',
    { className: 'navbar-container' },
    React.createElement(
      'div',
      { className: 'navbar-logo' },
      React.createElement('img', {
        src: '/logo.jpg',
        alt: 'Company Logo',
        className: 'logo-image',
      }),
      React.createElement(
        'div',
        { className: 'company-name' },
        'Alpha Company'
      )
    ),
    React.createElement(
      'div',
      { className: 'navbar-links' },
      React.createElement(Link, { href: '/' }, React.createElement('a', { className: 'nav-link' }, 'Home')),
      React.createElement(Link, { href: '/about' }, React.createElement('a', { className: 'nav-link' }, 'About')),
      React.createElement(Link, { href: '/career-option' }, React.createElement('a', { className: 'nav-link' }, 'Career Option')),
      React.createElement(Link, { href: '/news' }, React.createElement('a', { className: 'nav-link' }, 'News')),
      React.createElement(Link, { href: '/contactus' }, React.createElement('a', { className: 'nav-link' }, 'Contact Us'))
    )
  );
}
