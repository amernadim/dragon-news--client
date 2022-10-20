import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
  return (
    <div>
      <h2>Here is Our Terms And Conditions</h2>
      <p>Go to : <Link to="/register">Register</Link></p>
    </div>
  );
};

export default TermsAndCondition;