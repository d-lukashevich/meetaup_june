import React, { useEffect, useReducer } from 'react';
import RebootCss from 'core-lib-react/globalStyles/RebootCss';
import Fonts from 'core-lib-react/globalStyles/Fonts';
import CommonStyles from 'core-lib-react/globalStyles/CommonStyles';
import Resize from 'core-lib-react/resize';

import TablePage from './components/TablePage';

const fetchPeople = async (url) => fetch(url).then((response) => response.json());
const recursiveRequest = (url, dispatcher) => {
  Promise.resolve(fetchPeople(url)).then(({ results = [], next } = {}) => {
    if (next) recursiveRequest(next, dispatcher);
    return dispatcher(results);
  });
};

function App() {
  const [people, dispatchPeople] = useReducer((state, results) => [...state, ...results], []);

  useEffect(() => {
    recursiveRequest('https://swapi.dev/api/people/', dispatchPeople);
  }, [dispatchPeople]);

  return (
    <Resize>
      <RebootCss />
      <Fonts />
      <CommonStyles />
      <div style={{ padding: 15 }}>
        <TablePage {...{ people }} />
      </div>
    </Resize>
  );
}

export default App;
