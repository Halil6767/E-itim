console.log(this)   // Global Scope
    const emp1 = { // Object literal
        name:"Halil",
        age:22,
        showInfos: function(){console.log("Bilgiler Gösteriliyor...");}
    };
const emp2 = {
    name:"Ceren",
    age:20
}
console.log(emp1);

function Employee(name,age,salary){ // Yapıcı Fonksiyon - Constructor
    this.name = name;
    this.age = age;
    this.salary = salary;
    
  this.showInfos = function(){
      console.log(this.name,this.age,this.salary);


      /* Buda Oluyor Örnek console.log(this);*/
  }
} 

const emp1 = new Employee("Halil",22,3000);
const emp2 = new Employee("Ece", 20,5000);


emp1.showInfos();
emp2.showInfos();