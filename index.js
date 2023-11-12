class Employee {
    constructor() {
    }
  }
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = { ...employee };
    updatedEmployee[key] = value;
    return updatedEmployee;
  }

  const employee = new Employee();
  
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, key, value);

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }

  function deleteFromEmployeeByKey(employee, key) {
    const clone = { ...employee }; 
    delete clone[key];
    clone[key] = undefined; 
    return clone;
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }

