export default function iterateThroughObject(reportWithIterator) {
  const employees = [];

  // Iterate through the reportWithIterator
  for (const employee of reportWithIterator) {
    employees.push(employee);
  }

  return employees.join(' | ');
}
