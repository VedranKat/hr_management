import { ADD_EMPLOYEES, ADD_EMPLOYEE, REMOVE_EMPLOYEE, EDIT_EMPLOYEE, FILTER_EMPLOYEE, FILTER_EMPLOYEES} from '../actions';

const initialState = {
  employees: [],
  filteredEmployees: [],  
};

function addEmployees(state, action) {
  return {
    ...state,
    employees: [...state.employees, ...action.payload],
    filteredEmployees: [...state.filteredEmployees, ...action.payload]
  };
}

function addEmployee(state, action) {
  return {
    ...state,
    employees: [...state.employees, action.payload],
    filteredEmployees: [...state.filteredEmployees, action.payload]
  };
}

function removeEmployee(state, action) {
  return {
    ...state,
    employees: [
      ...state.employees.slice(0, action.payload),
      ...state.employees.slice(action.payload + 1)
    ],
    filteredEmployees: [
      ...state.filteredEmployees.slice(0, action.payload),
      ...state.filteredEmployees.slice(action.payload + 1)
    ],
  };
}

function editEmployee(state, action) {
  const index = state.employees.findIndex(c => c.id === action.payload.id);
  const indexF = state.filteredEmployees.findIndex(c => c.id === action.payload.id);

  return {
    ...state,
    employees: [
      ...state.employees.slice(0, index),
      action.payload,
      ...state.employees.slice(index + 1)
    ],
    filteredEmployees: [
      ...state.filteredEmployees.slice(0, indexF),
      action.payload,
      ...state.filteredEmployees.slice(indexF + 1)
    ],
  };
}

function filteremployees(state, action) {
  return Object.assign({}, state, {
    filteredEmployees: state.employees.filter(
      card =>
        card.name.toLowerCase().search(action.payload.toLowerCase()) !== -1
    )
  });
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_EMPLOYEES:
      return addEmployees(state, action);

    case ADD_EMPLOYEE:
      return addEmployee(state, action);
    
    case REMOVE_EMPLOYEE:
      return removeEmployee(state, action);
    
    case EDIT_EMPLOYEE:
      return editEmployee(state, action);

    case FILTER_EMPLOYEES:
      return filteremployees(state, action);

    default:
      return state;
  }
}
