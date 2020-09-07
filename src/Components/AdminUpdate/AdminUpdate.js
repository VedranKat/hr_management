import React from "react";
import AdminHeader from "../AdminHeader/AdminHeader.js";
import styles from "./AdminUpdate.module.css";
import UpdateForm from "../../Containers/UpdateForm/UpdateForm.js";
import EList from "../EList/EList.js";


const AdminUpdate=()=>{


return(
    <div>
        <AdminHeader></AdminHeader>
        <UpdateForm></UpdateForm>   
        <EList></EList>     
    </div>
)

}

export default AdminUpdate;