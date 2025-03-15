const user = {
    name: 'Ivan',
    age: 22,
    city: 'Odesa',
    profession: 'Front-end Developer',
    phoneNumber: '0736669601',
    getInfo () {
        return `Name: ${this.name}, Age: ${this.age}, City: ${this.city}, Profession: ${this.profession}, Phone: ${this.phoneNumber}`;
    }
}

console.log(user.getInfo());