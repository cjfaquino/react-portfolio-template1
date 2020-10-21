import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div>
        <div>
          <Link to="/" className="name">
            <strong>your name.</strong>
          </Link>
        </div>
        <div className="contractWork">
          Available for contract work: <strong>Available</strong>
        </div>
      </div>
    </header>
  );
}
