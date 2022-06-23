// Me
    // "Create an array called Employee with properties for name, employeeNumber, annualSalary, and reviewRating"

// Assistant
var employee = [{name: "someone", employeeNumber: 1234, annualSalary: 1234, reviewRating: 5}]
//--------------------------------------------------------------------------------------------------------------------

// Me
    // "Convert that array to ES6"

// Assistant
const employee = [
    {name: "foo", employeeNumber: 1234, annualSalary: 1234, reviewRating: 5}
];
//--------------------------------------------------------------------------------------------------------------------

// Me
    // "Add two more employee objects to the employees array"

// Assistant
employee.push(
    {name: "foo", employeeNumber: 1234, annualSalary: 1234, reviewRating: 5},
    {name: "bar", employeeNumber: 1235, annualSalary: 1235, reviewRating: 3}
);
//--------------------------------------------------------------------------------------------------------------------

// Me
    // "Explain why this is true, preferably with something I can test."

// Assistant
    // "employee.push() will add an item to the end of the array. So employee.push({...}); will append an item. 
    // You can push multiple items at once: employee.push({...}, {...});"
//-----------------------------------< END OF CONVO >---------------------------------------------------------------------------------
