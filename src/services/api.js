import callApi from "../utils/call-api";

export const getEmployees = () => callApi("/employees", { method: "GET" });
export const postEmployees = body => callApi("/employees", { method: "POST", body });
export const deleteEmployees = id => callApi(`/employees/${id}`, { method: "DELETE" });
export const updateEmployees = (body,id) =>callApi(`/employees/${id}`, {method: "PUT", body});


