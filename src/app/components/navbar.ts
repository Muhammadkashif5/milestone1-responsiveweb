import React from "react";
import Link from "next/link";
import "./style2.css";

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
        React.createElement(Link, { href: '/', className: 'nav-link' }, 'Home'),
        React.createElement(Link, { href: '/about', className: 'nav-link' }, 'About'),
        React.createElement(Link, { href: '/career-option', className: 'nav-link' }, 'Career Option'),
        // React.createElement(Link, { href: '/news', className: 'nav-link' }, 'News'),
        React.createElement(Link, { href: '/contactus', className: 'nav-link' }, 'Contact Us')
    )
  );
}
