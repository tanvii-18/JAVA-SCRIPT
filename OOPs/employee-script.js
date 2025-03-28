
class Employee {

    constructor(name,id,salary,role)
    {
        this.name = name;
        this.id = id;
        this.salary = salary;
        this.role = role;
    }

    getDetails ()
    {
        document.writeln(this.name);
        document.writeln(this.id);
        document.writeln(this.salary);
        document.writeln(this.role);
    }
}

const e1 = new Employee(1,"pal" , 31000, "Manager"+"<br>");
const e2 = new Employee(2, "liza" , 30000 , "Develper" + "<br>");
const e3 = new Employee(3 , "Max", 25000, "Designer");

e1.getDetails();
e2.getDetails();
e3.getDetails();