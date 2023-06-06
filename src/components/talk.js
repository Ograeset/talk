import React from 'react';
import { Link } from 'react-router-dom';

const Talk = () => {
  return (
    <div>
      <h2>Hur känner du dig just nu?</h2>
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <Link to="/arg">
          <button>Arg</button>
        </Link>
        <Link to="/ledsen">
          <button>Ledsen</button>
        </Link>
      </div>
    </div>
  );
};

export default Talk