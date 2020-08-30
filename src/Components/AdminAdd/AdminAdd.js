import React from "react";
import AdminHeader from "../AdminHeader/AdminHeader.js";
import AddForm from "../../Containers/AddForm/AddForm.js";
import styles from "./AdminAdd.module.css";
import EList from "../EList/EList.js";


const AdminAdd=()=>{


return(
    <div>
        <AdminHeader></AdminHeader>
        <AddForm></AddForm>  
        <EList></EList>      
    </div>
)

}

export default AdminAdd;