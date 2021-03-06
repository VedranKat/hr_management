import React, {useEffect} from "react";
import LoginHeader from "../LoginHeader/LoginHeader.js";
import AdminHeader from "../AdminHeader/AdminHeader.js";
import UserHeader from "../UserHeader/UserHeader.js";
import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminAdd from "../AdminAdd/AdminAdd.js";
import AdminDelete from "../AdminDelete/AdminDelete.js";
import AdminUpdate from "../AdminUpdate/AdminUpdate.js";
import AdminSearchStat from "../AdminSearchStat/AdminSearchStat.js";
import { getEmployees } from "../../services";
import { addEmployees} from "../../redux/actions";
import {useDispatch } from 'react-redux';
import UserSearchStat from "../UserSearchStat/UserSearchStat.js";
import AdminFilter from "../AdminFilter/AdminFilter.js";
import AdminStatistics from "../AdminStatistics/AdminStatistics"
import UserStatistics from "../UserStatistics/UserStatistics.js";
import UserFilter from "../UserFilter/UserFilter.js";


const App=()=>{

  const dispatch = useDispatch();

  const fetchData = async () => {
    const json = await getEmployees();
    dispatch(addEmployees(json));
  };


  useEffect(() => {
    fetchData();
  });


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
      <Route path="/AdminFilter" component={AdminFilter}/> 
      <Route path="/AdminStatistics" component={AdminStatistics}/> 
      <Route path="/UserSearchStat" component={UserSearchStat}/>  
      <Route path="/UserFilter" component={UserFilter}/>
      <Route path="/UserStatistics" component={UserStatistics}/>   
      <Route path="/User" component={UserHeader} />
    </Switch>
  </div>
  </Router>
)

}

export default App;


