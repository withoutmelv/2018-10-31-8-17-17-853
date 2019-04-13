import Person from "../../main/practice_10/person.js";
function Student(isLeader,name,age,klass) {
    Person.apply(this,arguments);
    this.klass=klass;
    this.introduce=function () {
        return "My name is "+name+". I am "+age+" years old. I am a Student. I am at Class "+klass.number+".";
    };
}
module.exports=Student;
