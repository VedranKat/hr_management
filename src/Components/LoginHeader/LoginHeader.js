import React from "react";
import styles from "./LoginHeader.module.css";
import { Link } from "react-router-dom";

const LoginHeader=()=>{


return(
    
        <div className={styles.Bar}>        
        <Link to="/Admin" className={styles.button}>
                Log in
        </Link>    
        <button className={styles.button}>
                Register New User
        </button>                
        </div>
)

}

export default LoginHeader;