import Person from "../../main/practice_6/person.js";
function Teacher(name,age,klass=-1) {
    Person.apply(this,arguments);
    this.klass=klass;
    if (klass===-1){
        this.introduce=function () {
            return "My name is "+name+". I am "+age+" years old. I am a Teacher. I teach No Class.";
        }
    }else{
        this.introduce=function () {
            return "My name is "+name+". I am "+age+" years old. I am a Teacher. I teach Class "+klass+".";
        }
    }
}
module.exports=Teacher;