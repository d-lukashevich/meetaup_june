import React, { useContext, useMemo, useState } from 'react';
import { Table, Thead, Tbody, Row, Cell, Sorter, Filter, filters, sorters } from 'core-lib-react/components/Table';
import { ResizeContext } from 'core-lib-react/resize';
import getColorList from './utils';

const genders = ['male', 'female', 'hermaphrodite'];

const Page = ({ people }) => {
  const { width } = useContext(ResizeContext);
  const cellWidths = [width < 900 ? 300 : 'auto', 170];

  const [nameSorter, setNameSorter] = useState(() => sorters.asc(0));
  const [genderFilter, setGenderFilter] = useState(() => filters.oneOf(1, genders));

  const colorList = useMemo(() => getColorList(people), [people]);

  return (
    <div>
      <Table
        filters={[genderFilter, filters.oneOf(3, Object.values(colorList))]}
        sorters={[...(nameSorter ? [nameSorter] : [])]}
        defaultResizable={true}
        minCellWidths={[300, 170]}
        cellWidths={cellWidths}
        defaultMinCellWidth={100}
        defaultCellWidth={150}>
        <Thead>
          <Row>
            <Cell
              leftSlot={
                <Sorter
                  isControlled={true}
                  onClick={(e, direction) => {
                    setNameSorter(() => {
                      return direction === 'normal' ? null : sorters[direction](0);
                    });
                  }}
                />
              }>
              Name
            </Cell>
            <Cell
              rightSlot={
                <Filter
                  value={genderFilter.compare}
                  updateFilter={(compare) => {
                    setGenderFilter(() => filters.oneOf(1, compare));
                  }}
                  filterType={'oneOf'}
                />
              }>
              Gender
            </Cell>
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
