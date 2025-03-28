

class Student {

    #roll_no;
    #name;
    #age;
    #std;
    #percentage;

    constructor(name,age,roll_no,std,percentage)
    {
        this.#roll_no = roll_no;
        this.#name = name;
        this.#age = age;
        this.#std = std;
        this.#percentage = percentage;
    }

    StudentDetails()
    {
        document.writeln(this.#roll_no);
        document.writeln(this.#name);
        document.writeln(this.#age);
        document.writeln(this.#std);
        document.writeln(this.#percentage);
    }
}


const s1 = new Student(1 , "Mira", 12 , 7 , 88.08 +"<br>");
const s2 = new Student(12 , "Jhon", 15 , 10 , 80.78 +"<br>");
const s3 = new Student(9 , "Riya", 16 , 11 , 94.06);

s1.StudentDetails();
s2.StudentDetails();
s3.StudentDetails();


