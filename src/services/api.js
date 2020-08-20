import callApi from "../utils/call-api";

export const getEmployee = () => callApi("/employees", { method: "GET" });
export const postEmployee = body => callApi("/employees", { method: "POST", body });
export const deleteEmployee = id => callApi(`/employees/${id}`, { method: "DELETE" });
