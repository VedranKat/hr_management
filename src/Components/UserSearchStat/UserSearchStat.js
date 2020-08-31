import React from "react";
import styles from "./UserSearchStat.module.css";
import EListFilter from "../EListFilter/EListFilter.js";
import UserHeader from "../UserHeader/UserHeader.js";


const UserSearchStat=()=>{


return(
    <div>
        <UserHeader></UserHeader>
        <EListFilter />        
    </div>
)

}

export default UserSearchStat;