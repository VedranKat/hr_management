import React from "react";
import {  Table } from "semantic-ui-react";
import {useSelector} from 'react-redux';   
import styles from './EListFilterUloga.module.css'; 

const EListFilter = (props) => {

  
    const { employees } = useSelector((state) => state.employees);  
    const [searchOdjel, setOdjel] = React.useState("");
    const [searchUloga, setUloga] = React.useState("");      

    function changeUloga(e) {
      setUloga(e.target.value);
    }

    function changeOdjel(e){
      setOdjel(e.target.value);
    }


    
    
      return (
      <div id="parent">
      
    <div class="dropdown">
    <form>
    <select id = "dd" onChange={changeOdjel} value={searchOdjel}>
    <option value = "">Filter po odjelima</option>
    <option value = "IT">IT</option>
    <option value = "Accounting">Accounting</option>
    <option value = "HR">Human Resources</option>
    <option value = "Management">Management</option>    
    </select>
    </form>
    </div>

    <div class="dropdown2">
    <form>
    <select id = "dd2" onChange={changeUloga} value={searchUloga}>
    <option value = "">Filter po ulogama</option>
    <option value = "IT-FrontEnd">IT-FrontEnd</option>
    <option value = "IT-BackEnd">IT-BackEnd</option>
    <option value = "IT-QA">IT-QA</option>
    <option value = "IT-Designer">IT-Designer</option>
    <option value = "Accounting-Financial">Accounting-Financial</option>
    <option value = "Accounting-HR">Accounting-HR</option>
    <option value = "Management-CEO">Management-CEO</option>  
    <option value = "Management-Commercial">Management-Commercial</option>   
    <option value = "HR-Manager">HR-Manager</option> 
    <option value = "HR-Advisor">HR-Advisor</option> 
    </select>
    </form>
    </div>  
         
    


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
        {employees.filter(tj => tj.odjel === searchOdjel || tj.uloga === searchUloga).map(el => {
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

