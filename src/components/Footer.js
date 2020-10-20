import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div>
        <span className="nameFooter">
          <strong>Your name.</strong>
        </span>{' '}
        All rights resserved.
      </div>
      <div className="footerLinks">
        <span>curriculum vitae</span>
        <span>email</span>
        <span>github</span>
        <span>linkedin</span>
      </div>
    </footer>
  );
}
