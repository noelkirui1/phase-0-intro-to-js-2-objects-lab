function employee() {
    function updateEmployeeWithKeyAndValue(employee, key, value) {
        function () {
            for (const key in employee) {
                delete employee[key];
              }
              employee.name = 'Sam';
        }
    }
}
