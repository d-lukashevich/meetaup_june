import React from 'react';
import RebootCss from 'core-lib-react/globalStyles/RebootCss';
import Fonts from 'core-lib-react/globalStyles/Fonts';
import CommonStyles from 'core-lib-react/globalStyles/CommonStyles';

import TablePage from './components/TablePage';

function App() {
  fetch('https://swapi.dev/api/people/')
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    });
  return (
    <>
      <RebootCss />
      <Fonts />
      <CommonStyles />
      <div style={{ padding: 15 }}>
        <TablePage />
      </div>
    </>
  );
}

export default App;
