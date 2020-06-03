import React from 'react';
import { Table, Thead, Tbody, Row, Cell } from 'core-lib-react/components/Table';

const Page = ({ people }) => {
  return (
    <div>
      <Table>
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
