
class Animal {

    #name;
    #age;
    #gender;
    #type;

    constructor(name,age,gender,type)
    {
        this.#name = name;
        this.#age = age;
        this.#gender = gender;
        this.#type = type;
    }

    animalDetails()
    {
        document.writeln(this.#name);
        document.writeln(this.#age);
        document.writeln(this.#gender);
        document.writeln(this.#type);
    }

}

const a1 = new Animal("Tiger", 4 , "Male", "Wlid" + "<br>");
const a2 = new Animal("dog", 3 , "Male", "Domestic"+ "<br>");
const a3 = new Animal("cat", 2 , "Female", "Domestic");

a1.animalDetails()
a2.animalDetails()
a3.animalDetails()