import React from 'react';

export default function Header() {
  return (
    <header>
      <div>
        <div>
          <a href="/" className="name">
            <strong>your name here.</strong>
          </a>
        </div>
        <div className="contractWork">
          Available for contract work: <strong>Available</strong>
        </div>
      </div>
    </header>
  );
}
