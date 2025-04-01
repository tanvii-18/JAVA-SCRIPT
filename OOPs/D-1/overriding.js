
class School
{
    constructor(name,year)
    {
        this.schoolName = name;
        this.year = year;
    }

    display()
    {
        document.writeln(this.schoolName);
        document.writeln(this.year)
    }
}

class Student extends School{

    constructor(studentName, std, schoolName, year)
    {
        super(schoolName,year)
        this.studentName = studentName;
        this.std = std;
    }

    display()
    {
        document.writeln(this.studentName);
        document.writeln(this.std);
        document.writeln(this.schoolName);
        document.writeln(this.year)
    }
}

const sc1 = new School("deepdarshan", 2000 +"<br>")
sc1.display();

const s1 = new Student("Tina", 6 , "deepdarshan", 2023);
s1.display();