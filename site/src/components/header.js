import { Link } from 'gatsby';
import React from 'react';

const Header = ({ siteTitle }) => (
  <header>
    <Link
      to="/"
      style={{
        color: 'white',
        textDecoration: 'none',
      }}
    >
      {siteTitle}
    </Link>
    <nav>
      <Link to="/fluid/" activeClassName="active">
        Fluid
      </Link>
      <Link to="/fixed/" activeClassName="active">
        Fixed
      </Link>
      <Link to="/gifs/" activeClassName="active">
        GIFs
      </Link>
      <Link to="/manual/" activeClassName="active">
        Manual
      </Link>
      <a href="https://www.npmjs.com/package/gatsby-transformer-cloudinary#install">
        Install
      </a>
    </nav>
  </header>
);

export default Header;