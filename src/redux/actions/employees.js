import { createAction } from '../../utils/action-helpers';

export const ADD_EMPLOYEES = "ADD_EMPLOYEES";
export const addEmployees = createAction(ADD_EMPLOYEES);

export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const addEmployee = createAction(ADD_EMPLOYEE);

export const REMOVE_EMPLOYEE = "REMOVE_EMPLOYEE";
export const removeEmployee = createAction(REMOVE_EMPLOYEE);

export const EDIT_EMPLOYEE = "EDIT_EMPLOYEE";
export const editEmployee = createAction(EDIT_EMPLOYEE);

export const FILTER_EMPLOYEES = "FILTER_EMPLOYEES";
export const filterEmployees = createAction(FILTER_EMPLOYEES);

