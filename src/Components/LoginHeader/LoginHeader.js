import React from "react";
import styles from "./LoginHeader.module.css";
import { Link } from "react-router-dom";

const LoginHeader=()=>{


return(
    
        <div className={styles.Bar}>        
        <Link to="/Admin" className={styles.button}>
                Admin
        </Link>    
        <Link to="/User" className={styles.button}>
                User
        </Link>               
        </div>
)

}

export default LoginHeader;