import React from "react";
import AdminHeader from "../AdminHeader/AdminHeader.js";
import styles from "./AdminSearchStat.module.css";
import SearchStatForm from "../SearchStatForm/SearchStatForm.js";
import EList from "../EList/EList.js";
import EListFilter from "../EListFilter/EListFilter.js";


const AdminSearchStat=()=>{


return(
    <div>
        <AdminHeader></AdminHeader>
        <EListFilter />        
    </div>
)

}

export default AdminSearchStat;