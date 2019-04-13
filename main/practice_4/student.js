import Person from "../../main/practice_4/person.js";
function Student(name,age,Class) {
    Person.apply(this,arguments);
    this.Class=Class;
    this.introduce=function () {
        return "My name is "+name+". I am "+age+" years old. I am a Student. I am at Class "+Class+".";
    }
}
module.exports=Student;