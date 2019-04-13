import Person from "../../main/practice_9/person.js";
function Teacher(isLeader,name,age,klass=null){
    Person.apply(this,arguments);
    this.klass=klass;
    this.introduce=function () {
        if (klass!==null){
            return "My name is "+name+". I am "+age+" years old. I am a Teacher. I teach Class "+klass.number+".";
        }else{
            return "My name is "+name+". I am "+age+" years old. I am a Teacher. I teach No Class."
        }
    };
}
module.exports=Teacher;