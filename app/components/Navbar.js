import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import { connect } from 'react-redux';
// import AllCampi from './AllCampi';
// import AllStudents from './AllStudents';

function Navbar () {
  return (
    <nav>
          <button>
            <Link to={'/campi'}>Explore Our Campi</Link>
          </button>
          <button>
            <Link to={'/students'}>Meet Our Students</Link>
          </button>
          <button>
          <Link to={'/home'}>HOME</Link>
        </button>
    </nav>
  )
}

export default Navbar;
