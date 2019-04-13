import Person from "../../main/practice_3/person.js";
function Student(name,age,klass) {
    Person.apply(this,arguments);
    this.klass=klass;
    this.introduce=function () {
        return "I am a Student. I am at Class "+klass+".";
    };
}
module.exports=Student;
