import React from "react";
import styles from "./AdminDeleteForm.module.css";
import { deleteEmployees } from "../../services";

const AdminDeleteForm=()=>{

        const [brojID, setBROJ] = React.useState("");

        function handleSubmit(){
                deleteEmployees(brojID)
        }
            
              

              function handleChange(e) {
                setBROJ(e.target.value);
              }
    return(
        
        <form className={styles.form} onSubmit={handleSubmit}>
         <label htmlFor="name">Unesite ID zaposlenika kojeg želite obrisati: </label>
        <input        
          className={styles.input}            
          type="text"
          name="brojID"
          onChange={handleChange}
          required
        />
        <button type="submit" className={styles.button}>Delete</button>
      </form>  
    )
    
    }
    
    export default AdminDeleteForm;