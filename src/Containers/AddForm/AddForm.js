import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postEmployees } from "../../services";
import styles from './AddForm.module.css';

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imePrezime: '',
      placa: '',
      odjel: '',
      uloga: '',
      datumRodjenja: '',      
      datumZaposlenja: ''
    }
  }

  handleSubmit = async (event) => {
    
    try {   
        await postEmployees(this.state);
                   
    } catch (error) {
      console.log(error);
    }

    this.setState({ imePrezime: '',
    placa: '',
    odjel: '',
    uloga: '',
    datumRodjenja: '',      
    datumZaposlenja: '' });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (      
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          className={styles.input}  
          placeholder="ime i prezime" 
          type="text"
          name="imePrezime"
          onChange={this.handleChange}
          required
        />
        <input
          className={styles.input}     
          placeholder="placa"     
          type="text"
          name="placa"
          onChange={this.handleChange}
          required
        />
        <input
          className={styles.input}   
          placeholder="odjel"       
          type="text"
          name="odjel"
          onChange={this.handleChange}
          required
        />
        <input
          className={styles.input}   
          placeholder="uloga"       
          type="text"
          name="uloga"
          onChange={this.handleChange}
          required
        />        
        Datum Rodjenja  :
        <input
          className={styles.input}   
          placeholder="Datum Rodjenja"       
          type="date"          
          name="datumRodjenja"
          onChange={this.handleChange}
          required
        />        
        Datum Zaposlenja  :
        <input
          className={styles.input}   
          label="datum Zaposlenja"       
          type="date"          
          name="datumZaposlenja"
          onChange={this.handleChange}
          required
        />
        <button type="submit" className={styles.button}>Add Employee</button>
      </form>      
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    employees: dispatch.employees.employees
  };
}

export default connect(  
  mapDispatchToProps
)(AddForm);
