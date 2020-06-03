import React, { useContext, useMemo } from 'react';
import { Table, Thead, Tbody, Row, Cell, Sorter, Filter, filters } from 'core-lib-react/components/Table';
import { ResizeContext } from 'core-lib-react/resize';
import getColorList from './utils';

const genders = ['male', 'female', 'hermaphrodite'];

const Page = ({ people }) => {
  const { width } = useContext(ResizeContext);
  const cellWidths = [width < 900 ? 300 : 'auto', 170];

  const colorList = useMemo(() => getColorList(people), [people]);

  return (
    <div>
      <Table
        filters={[filters.oneOf(1, genders), filters.oneOf(3, Object.values(colorList))]}
        sorters={[]}
        defaultResizable={true}
        minCellWidths={[300, 170]}
        cellWidths={cellWidths}
        defaultMinCellWidth={100}
        defaultCellWidth={150}>
        <Thead>
          <Row>
            <Cell leftSlot={<Sorter />}>Name</Cell>
            <Cell rightSlot={<Filter filterType={'oneOf'} />}>Gender</Cell>
            <Cell>Homeworld</Cell>
            <Cell leftSlot={<Filter filterType={'oneOf'} />}>Eye color</Cell>
            <Cell rightSlot={<Sorter />}>Height</Cell>
          </Row>
        </Thead>
        <Tbody>
          {people.map(({ name, gender, homeworld, eye_color, height }) => (
            <Row key={name}>
              <Cell>{name}</Cell>
              <Cell filtersValue={gender === 'n/a' ? 'none' : gender}>{gender}</Cell>
              <Cell>{homeworld}</Cell>
              <Cell filtersValue={colorList[eye_color]}>{eye_color}</Cell>
              <Cell filtersValue={isNaN(Number(height)) ? -1 : Number(height)}>{height}</Cell>
            </Row>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default Page;
