import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postEmployees } from "../../services";
import styles from './AddForm.module.css';

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ime: '',
      prezime: '',
      radnoMjesto: '',
      godinaRodjenja: ''
    }
  }

  handleSubmit = async (event) => {
    
    try {   
        await postEmployees(this.state);
                   
    } catch (error) {
      console.log(error);
    }

    this.setState({ ime: "",
    prezime: "",
    radnoMjesto: "",
    godinaRodjenja: "" });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (      
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          className={styles.input}  
          placeholder="ime" 
          type="text"
          name="ime"
          onChange={this.handleChange}
          required
        />
        <input
          className={styles.input}     
          placeholder="prezime"     
          type="text"
          name="prezime"
          onChange={this.handleChange}
          required
        />
        <input
          className={styles.input}   
          placeholder="radnoMjesto"       
          type="text"
          name="radnoMjesto"
          onChange={this.handleChange}
          required
        />
        <input
          className={styles.input}          
          type="date"          
          name="godinaRodjenja"
          onChange={this.handleChange}
          required
        />
        <button type="submit" className={styles.button}>Add card</button>
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
