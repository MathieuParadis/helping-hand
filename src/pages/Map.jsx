// CONFIG IMPORTS
import React, {useEffect} from 'react';

const Map = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="map">
      <h1>Map page</h1>
    </div>
  );
};

export default Map;