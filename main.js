let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    developers: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}],
    }
};

function sumSalary(department) {
    if(Array.isArray(department)) {
        return department.reduce((sum, { salary }) => sum + salary, 0);
    }
    return Object.values(department).reduce((sum, value) => sum + sumSalary(value), 0);
}

console.log(sumSalary(company));