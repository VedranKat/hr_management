import React from "react";
import styles from "./AdminHeader.module.css";
import { Link } from "react-router-dom";

const AdminHeader=()=>{


    return(
        
            <div className={styles.Bar}>    
            <Link to="/" className={styles.button}>
                    HOME
            </Link>                 
            <Link to ="/AdminAdd" className={styles.button}>
                    Add Employee
            </Link>    
            <Link to ="/AdminUpdate" className={styles.button}>
                    Update Employee
            </Link>     
            <Link to ="/AdminDelete" className={styles.button}>
                    Delete Employee
            </Link>    
            <Link to = "/AdminSearchStat" className={styles.button}>
                    Search
            </Link>   
            <Link to = "/AdminFilter" className={styles.button}>
                    Filter
            </Link>        
            <Link to = "/AdminStatistics" className={styles.button}>
                    Statistics
            </Link>           
            </div>
    )
    
    }
    
    export default AdminHeader;