import React from 'react';
import ColorSpot from '../colorSpot';

const getColorList = (people) =>
  people.reduce((result, { eye_color }) => {
    if (!result[eye_color]) result[eye_color] = <ColorSpot color={eye_color} />;
    return result;
  }, {});

export default getColorList;
