import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div>
        <div>
          <Link to="/" className="name">
            <strong>Christian Aquino</strong>
          </Link>
        </div>
        <div className="contractWork">
          <Link to="/" className="name">
            Home
          </Link>
        </div>
      </div>
    </header>
  );
}
