function Student(firstName, lastName, birthYear, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = grades || [];
    this.attendance = new Array(25).fill(null);
    this.attendanceIndex = 0;
}

Student.prototype.getAge = function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
};

Student.prototype.getAverageGrade = function () {
    if (this.grades.length === 0) return 0;
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / this.grades.length;
};

Student.prototype.present = function () {
    if (this.attendanceIndex < 25) {
        this.attendance[this.attendanceIndex] = true;
        this.attendanceIndex++;
    } else {
        console.warn("The list is full");
    }
};

Student.prototype.absent = function () {
    if (this.attendanceIndex < 25) {
        this.attendance[this.attendanceIndex] = false;
        this.attendanceIndex++;
    } else {
        console.warn("The list is full");
    }
};

Student.prototype.summary = function () {
    const averageGrade = this.getAverageGrade();

    const attendedCount = this.attendance.filter(val => val === true).length;
    const totalMarked = this.attendance.filter(val => val !== null).length;
    const attendanceRate = totalMarked ? attendedCount / totalMarked : 0;

    if (averageGrade > 90 && attendanceRate > 0.9) {
        return "Excellent!";
    } else if (averageGrade > 90 || attendanceRate > 0.9) {
        return "Very Good";
    } else {
        return "Good";
    }
};

const student1 = new Student("Maksim", "Pankov", 2002, [100, 88, 64]);
const student2 = new Student("Anna", "Treshchova", 2001, [99, 94, 100]);
const student3 = new Student("Kostiantyn", "Pavlenko", 1999, [89, 91, 49]);



console.log(`${student1.firstName} ${student1.lastName} - Age: ${student1.getAge()}`);
console.log(`Average grade: ${student1.getAverageGrade()}`);
console.log(`Summary: ${student1.summary()}`);

console.log(`${student2.firstName} ${student2.lastName} - Age: ${student2.getAge()}`);
console.log(`Average grade: ${student2.getAverageGrade()}`);
console.log(`Summary: ${student2.summary()}`);

console.log(`${student3.firstName} ${student3.lastName} - Age: ${student3.getAge()}`);
console.log(`Average grade: ${student3.getAverageGrade()}`);
console.log(`Summary: ${student3.summary()}`);