import React from "react";
import {  Table } from "semantic-ui-react";
import {useSelector} from 'react-redux';   
import styles from './EListFilter.module.css'; 

const EListFilter = (props) => {

    const { employees } = useSelector((state) => state.employees);
    const { searchOdjel } = props;
    
      return (
        <Table className={styles.tabla} singleLine>
          <Table.Header>
            <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Ime</Table.HeaderCell>
            <Table.HeaderCell>Prezime</Table.HeaderCell>
            <Table.HeaderCell>Radno Mjesto</Table.HeaderCell>
            <Table.HeaderCell>Godina Rodjenja</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
        {employees.filter(tj => tj.radnoMjesto === searchOdjel).map(el => {
              return (
                <Table.Row key={el.id}> 
                <Table.Cell>{el.id}</Table.Cell>
                <Table.Cell>{el.ime}</Table.Cell>
                <Table.Cell>{el.prezime}</Table.Cell>
                <Table.Cell>{el.radnoMjesto}</Table.Cell>
                <Table.Cell>{el.godinaRodjenja}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    );
  }

  export default EListFilter; 

