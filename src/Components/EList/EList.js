import React from "react";
import {  Table } from "semantic-ui-react";
import {useSelector} from 'react-redux';    

const EList = (props) => {

    const { employees } = useSelector((state) => state.employees);
    const { currentWeek } = props;
    
      return (
        <Table singleLine>
          <Table.Header>
            <Table.Row>
            <Table.HeaderCell>Ime</Table.HeaderCell>
            <Table.HeaderCell>Prezime</Table.HeaderCell>
            <Table.HeaderCell>Radno Mjesto</Table.HeaderCell>
            <Table.HeaderCell>Godina Rodjenja</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employees.map(el => {
              return (
                <Table.Row key={el.id}> 
                <Table.Cell>{el.ime}</Table.Cell>
                <Table.Cell>{el.prezime}</Table.Cell>
                <Table.Cell>{el.radnoMjesto}</Table.Cell>
                <Table.Cell>{el.godineRodjenja}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    );
  }

  export default EList; 

