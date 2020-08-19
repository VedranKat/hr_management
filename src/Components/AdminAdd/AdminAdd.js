import React from "react";
import AdminHeader from "../AdminHeader/AdminHeader.js";
import AddForm from "../../Containers/AddForm/AddForm.js";
import styles from "./AdminAdd.module.css";


const AdminAdd=()=>{


return(
    <div>
        <AdminHeader></AdminHeader>
        <AddForm></AddForm>        
    </div>
)

}

export default AdminAdd;