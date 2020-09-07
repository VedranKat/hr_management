import React from "react";
import {  Table } from "semantic-ui-react";
import {useSelector} from 'react-redux';   
import styles from './EListFilter.module.css'; 

const EListFilter = (props) => {

  
    const { employees } = useSelector((state) => state.employees);  
    const [searchIme, setIme] = React.useState("");         

    function handleNameChange(e) {
      setIme(e.target.value);
    }   
    
      return (
      <div id="parent">
        <form autocomplete="off">        
          <label htmlFor="name">Unesite Ime I prezime</label>
          <input
            type="text"
            name="name"
            id="name"
            value={searchIme}
            onChange={handleNameChange}/>        
      </form>
  

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
        {employees.filter(tj => tj.imePrezime === searchIme).map(el => {
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
      </div>        
      
    );
  }

  export default EListFilter; 

