export default function createIteratorObject(report) {
  const employees = report.allEmployees;
  const employeeList = [];

  // Loop through each department and gather employees
  for (const department in employees) {
    if (Object.hasOwnProperty.call(employees, department)) {
      employeeList.push(...employees[department]);
    }
  }

  // Use a generator to yield each employee
  function* employeeGenerator() {
    for (const employee of employeeList) {
      yield employee;
    }
  }

  return employeeGenerator(); // Return the generator
}
