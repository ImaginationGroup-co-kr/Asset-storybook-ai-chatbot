import React from 'react';

import './spinner.css';

/** Primary UI component for user interaction */
export const Spinner = ({ ...props }) => {
  return (
    <div className="storybook-spinner" {...props}>
      <div className="storybook-spinner--dot"></div>
      <div className="storybook-spinner--dot"></div>
      <div className="storybook-spinner--dot"></div>
    </div>
  );
};
