import Person from "../../main/practice_6/person.js";
function Teacher(name,age,Class=-1) {
    Person.apply(this,arguments);
    this.Class=Class;
    if (Class===-1){
        this.introduce=function () {
            return "My name is "+name+". I am "+age+" years old. I am a Teacher. I teach No Class.";
        }
    }else{
        this.introduce=function () {
            return "My name is "+name+". I am "+age+" years old. I am a Teacher. I teach Class "+Class+".";
        }
    }
}
module.exports=Teacher;