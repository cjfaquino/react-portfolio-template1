import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div>
        <span className="nameFooter">
          <strong>Christian Aquino.</strong>
        </span>{' '}
        All rights reserved.
      </div>
      <div className="footerLinks">
        <span>
          <a href="mailto:cjfaquino@outlook.com">email</a>
        </span>
        <span>
          <a href="https://github.com/cjfaquino">github</a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/cjfaquino">linkedin</a>
        </span>
      </div>
    </footer>
  );
}
