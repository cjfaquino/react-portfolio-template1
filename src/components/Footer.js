import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div>
        <span className="nameFooter">
          <strong>Your name.</strong>
        </span>{' '}
        All rights reserved.
      </div>
      <div className="footerLinks">
        <span>
          <Link to="/cv">curriculum vitae</Link>
        </span>
        <span>
          <a href="mailto:exmaple@email.com">email</a>
        </span>
        <span>
          <a href="https://github.com/yourusername">github</a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/yourusename">linkedin</a>
        </span>
      </div>
    </footer>
  );
}
