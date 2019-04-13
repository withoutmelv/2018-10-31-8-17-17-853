import Person from "../../main/practice_10/person.js";
function Teacher(isLeader,name,age,klasses=null){
    Person.apply(this,arguments);
    this.klasses=klasses;
    this.introduce=function () {
        if (klasses!==null){
            return "My name is "+name+". I am "+age+" years old. I am a Teacher. I teach Class "+klasses[0].number+", "+klasses[1].number+".";
        }else{
            return "My name is "+name+". I am "+age+" years old. I am a Teacher. I teach No Class.";
        }
    };
}
module.exports=Teacher;
