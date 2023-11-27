// Write your solution in this file!

let employee = {
    name: 'Dan H',
    streetAddress: '1090 S Jackson St',
  };
  
  // Function 1: updateEmployeeWithKeyAndValue
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
  // Function 2: destructivelyUpdateEmployeeWithKeyAndValue
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Function 3: deleteFromEmployeeByKey
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Function 4: destructivelyDeleteFromEmployeeByKey
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }