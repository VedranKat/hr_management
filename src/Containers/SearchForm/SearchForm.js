import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postEmployees } from "../../services";
import styles from './SearchForm.module.css';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {      
      radnoMjesto: '',      
    }
  }

  
  render() {
    return (      
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          className={styles.input}  
          placeholder="Radno Mjesto" 
          type="text"
          name="radnoMjesto"
          onChange={this.handleChange}
          required
        />        
        <button type="submit" className={styles.button}>Search</button>
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
)(SearchForm);
