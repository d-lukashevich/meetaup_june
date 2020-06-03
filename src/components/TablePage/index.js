import React, { useContext } from 'react';
import { Table, Thead, Tbody, Row, Cell } from 'core-lib-react/components/Table';
import { ResizeContext } from 'core-lib-react/resize';

const Page = ({ people }) => {
  const { width } = useContext(ResizeContext);
  const cellWidths = [width < 900 ? 300 : 'auto', 170];

  return (
    <div>
      <Table
        defaultResizable={true}
        minCellWidths={[300, 170]}
        cellWidths={cellWidths}
        defaultMinCellWidth={100}
        defaultCellWidth={150}>
        <Thead>
          <Row>
            <Cell>Name</Cell>
            <Cell>Gender</Cell>
            <Cell>Homeworld</Cell>
            <Cell>Eye color</Cell>
            <Cell>Height</Cell>
          </Row>
        </Thead>
        <Tbody>
          {people.map(({ name, gender, homeworld, eye_color, height }) => (
            <Row key={name}>
              <Cell>{name}</Cell>
              <Cell>{gender}</Cell>
              <Cell>{homeworld}</Cell>
              <Cell>{eye_color}</Cell>
              <Cell>{height}</Cell>
            </Row>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default Page;
