import React from 'react';

function FlexContainer(props) {
  const { children, deg = randInt(360), bg, style = {} } = props;

  if (Array.isArray(bg) && bg.length > 0) {
    style.background = `linear-gradient(${deg}deg,${bg.join(',')})`;
  }

  return (
    <div
      className="d-flex align-content-center align-items-center justify-content-center flex-wrap w-100 v-100 vh-100"
      style={style}
    >
      {children}
    </div>
  );
}

function randInt(n = 10) {
  return Math.floor(Math.random() * n);
}

export default FlexContainer;
