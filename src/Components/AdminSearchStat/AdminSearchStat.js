import React from "react";
import AdminHeader from "../AdminHeader/AdminHeader.js";
import styles from "./AdminSearchStat.module.css";
import SearchStatForm from "../SearchStatForm/SearchStatForm.js";


const AdminSearchStat=()=>{


return(
    <div>
        <AdminHeader></AdminHeader>
        <SearchStatForm></SearchStatForm>        
    </div>
)

}

export default AdminSearchStat;