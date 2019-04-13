import Person from "../../main/practice_3/person.js";
function Student(name,age,Class) {
    Person.apply(this,arguments);
    this.Class=Class;
    this.introduce=function () {
        return "I am a Student. I am at Class "+Class+".";
    };
}
module.exports=Student;
