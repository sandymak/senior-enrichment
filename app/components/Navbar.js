import React from 'react';
import { Link } from 'react-router-dom';

function Navbar () {
  return (
    <nav>
          <button>
            <Link to={'/campi'}>Explore Our Schools</Link>
          </button>
          <button>
            <Link to={'/students'}>Meet Our Students</Link>
          </button>
          <button>
          <Link to={'/home'}>Home</Link>
        </button>
    </nav>
  )
}

export default Navbar;
