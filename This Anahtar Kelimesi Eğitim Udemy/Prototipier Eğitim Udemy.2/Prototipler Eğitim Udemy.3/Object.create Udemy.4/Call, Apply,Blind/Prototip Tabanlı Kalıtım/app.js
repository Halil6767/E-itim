// Kalıtım - Inheritance


function Person(name,age){
    this.name = name;   
    this.age = age;
}

Person.prototype.showInfos = function(){
    console.log("İsim: " + this.name + "Yaş: " + this.age);
}
// const person = new Person("Halil",22);
// console.log(person);

function Employee(name,age,salary){
    this.name = name;
    this.age = age;
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.toString = function(){
    console.log("Employee");
}

//  Overriding - İptal Etme

Employee.prototype.showInfos = function(){
    console.log("İsim: " + this.name + "Yaş: " + this.age + "Maaş : " + this.salary);

}


const emp = new Employee("Halil",22,2000);

// console.log(emp);

emp.showInfos();
 console.log(emp.toString());