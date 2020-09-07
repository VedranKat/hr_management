import React from "react";
import styles from "./UserHeader.module.css";
import { Link } from "react-router-dom";

const UserHeader=()=>{


    return(
        
            <div className={styles.Bar}>    
            <Link to="/" className={styles.button}>
                    HOME
            </Link>               
            <Link to="/UserSearchStat" className={styles.button}>
                    Search
            </Link>      
            <Link to="/UserFilter" className={styles.button}>
                    Filter
            </Link>  
            <Link to="/UserStatistics" className={styles.button}>
                    Statistics
            </Link>             
            </div>

        
    )
    
    }
    
    export default UserHeader;