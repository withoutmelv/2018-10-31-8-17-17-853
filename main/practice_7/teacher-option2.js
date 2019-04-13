import Person from "../../main/practice_7/person.js";
function Teacher(name,age,klass=null) {
    Person.apply(this,arguments);
    this.klass=klass;
    if (klass===null){
        this.introduce=function () {
            return "My name is "+name+". I am "+age+" years old. I am a Teacher. I teach No Class.";
        };
    } else{
        this.introduce=function () {
            return "My name is "+name+". I am "+age+" years old. I am a Teacher. I teach Class "+klass.number+".";
        };
    }
    this.introduceWith=function (student) {
        if (student.klass.number===klass.number){
            return "My name is "+name+". I am "+age+" years old. I am a Teacher. I teach "+student.name+".";
        }else{
            return "My name is "+name+". I am "+age+" years old. I am a Teacher. I don't teach "+student.name+".";
        }
    };

}
module.exports=Teacher;
