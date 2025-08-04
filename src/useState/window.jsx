import React, { useState, useEffect } from 'react';// Make sure to import the CSS file

const Resize = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const updateScreenSize = () => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  useEffect(() => {
    window.addEventListener('resize', updateScreenSize);

    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  return (
    <div className="resize-container">
      <h1 className="title">📱 Screen Size Monitor</h1>
      <p
        className={`dimension ${
          screenSize.width > 800 ? 'green' : 'red'
        }`}
      >
        Width: {screenSize.width}px
      </p>
      <p
        className={`dimension ${
          screenSize.height > 600 ? 'green' : 'red'
        }`}
      >
        Height: {screenSize.height}px
      </p>
    </div>
  );
};

export default Resize;
