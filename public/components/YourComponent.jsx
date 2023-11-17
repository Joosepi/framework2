// YourComponent.jsx
import React, { useEffect } from 'react';
import fetchData from './YourComponent';

const YourComponent = () => {
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* Your component JSX goes here */}
    </div>
  );
};

export default YourComponent;
