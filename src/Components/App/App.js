import React from "react";
import LoginHeader from "../LoginHeader/LoginHeader.js";
import AdminHeader from "../AdminHeader/AdminHeader.js";
import UserHeader from "../UserHeader/UserHeader.js";
import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminAdd from "../AdminAdd/AdminAdd.js";
import AdminDelete from "../AdminDelete/AdminDelete.js";
import AdminUpdate from "../AdminUpdate/AdminUpdate.js";
import SearchStatForm from "../SearchStatForm/SearchStatForm.js";
import AdminSearchStat from "../AdminSearchStat/AdminSearchStat.js";


const App=()=>{


return(
  <Router>
  <div>    
    <Switch>
      <Route path="/" exact component={LoginHeader} />
      <Route path="/Admin" component={AdminHeader} />
      <Route path="/AdminAdd" component={AdminAdd}/>
      <Route path="/AdminDelete" component={AdminDelete}/>
      <Route path="/AdminUpdate" component={AdminUpdate}/>
      <Route path="/AdminSearchStat" component={AdminSearchStat}/>      
      <Route path="/User" component={UserHeader} />
    </Switch>
  </div>
  </Router>
)

}

export default App;


