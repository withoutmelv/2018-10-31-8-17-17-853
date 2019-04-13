import Person from "../../main/practice_5/person.js";
function Worker(name,age) {
    Person.apply(this,arguments);
    this.introduce=function () {
        return "My name is "+name+". I am "+age+" years old. I am a Teacher. I have a job."
    }
}
module.exports=Worker;