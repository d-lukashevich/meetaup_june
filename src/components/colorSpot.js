import React from 'react';
const ColorSpot = ({ color }) => {
  let calcColor;
  switch (color) {
    case 'blue-gray':
      calcColor = 'lightslategray';
      break;
    case 'hazel':
      calcColor = 'sandybrown';
      break;
    case 'unknown':
      return '?';
    case 'red, blue':
      calcColor = 'purple';
      break;
    default:
      calcColor = color;
  }
  return (
    <>
      <span
        style={{
          margin: 3,
          boxShadow: '0 0 3px #000',
          display: 'inline-block',
          verticalAlign: 'middle',
          width: 10,
          height: 10,
          borderRadius: '50%',
          backgroundColor: calcColor
        }}
      />
      {color}
    </>
  );
};

export default ColorSpot;
