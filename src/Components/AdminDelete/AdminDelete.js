import React from "react";
import AdminHeader from "../AdminHeader/AdminHeader.js";
import AdminDeleteForm from "../AdminDeleteForm/AdminDeleteForm.js";
import styles from "./AdminDelete.module.css";

const AdminDelete=()=>{


return(
    <div>
        <AdminHeader></AdminHeader>
        <AdminDeleteForm></AdminDeleteForm>        
    </div>
)

}

export default AdminDelete;