import React from "react";
import {  Table } from "semantic-ui-react";
import {useSelector} from 'react-redux';   
import styles from './EList.module.css'; 

const EList = (props) => {

    const { employees } = useSelector((state) => state.employees);    
    
      return (
        <Table className={styles.tabla} singleLine>
          <Table.Header>
            <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Ime i Prezime</Table.HeaderCell>    
            <Table.HeaderCell>Placa</Table.HeaderCell>        
            <Table.HeaderCell>Odjel</Table.HeaderCell>
            <Table.HeaderCell>Uloga</Table.HeaderCell>
            <Table.HeaderCell>Datum Rodjenja</Table.HeaderCell>
            <Table.HeaderCell>Datum Zaposlenja</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employees.map(el => {
              return (
                <Table.Row key={el.id}> 
                <Table.Cell>{el.id}</Table.Cell>
                <Table.Cell>{el.imePrezime}</Table.Cell>
                <Table.Cell>{el.placa}</Table.Cell>
                <Table.Cell>{el.odjel}</Table.Cell>
                <Table.Cell>{el.uloga}</Table.Cell>
                <Table.Cell>{el.datumRodjenja}</Table.Cell>
                <Table.Cell>{el.datumZaposlenja}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    );
  }

  export default EList; 

