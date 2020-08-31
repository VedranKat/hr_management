import React from "react";
import AdminHeader from "../AdminHeader/AdminHeader.js";
import AdminDeleteForm from "../AdminDeleteForm/AdminDeleteForm.js";
import styles from "./AdminDelete.module.css";
import EList from "../EList/EList.js";

const AdminDelete=()=>{


return(
    <div>
        <AdminHeader></AdminHeader>
        <AdminDeleteForm></AdminDeleteForm>    
        <EList></EList>    
    </div>
)

}

export default AdminDelete;