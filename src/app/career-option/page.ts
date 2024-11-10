import React from 'react';
import './style4.css';

export default function Careeroption() {
  return React.createElement(
    'div',
    { className: 'career-container' },
    React.createElement(
      'div',
      { className: 'career-content-wrapper' },
      // Left side: Career option content
      React.createElement(
        'div',
        { className: 'career-text' },
        React.createElement('h1', { className: 'career-title' }, 'Career-Option'),
        React.createElement(
          'p',
          { className: 'career-description' },
          'A firm\'s "Career Option" section typically lists job openings in various departments along with application details. It may also highlight employee success stories, values, and desired candidate qualities.'
        )
      ),
      // Right side: Image
      React.createElement(
        'div',
        { className: 'career-image-container' },
        React.createElement('img', {
          src: '/career.PNG',
          alt: 'About Us',
          className: 'career-image',
        })
      )
    )
  );
}
