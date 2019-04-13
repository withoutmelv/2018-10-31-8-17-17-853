import Person from "../../main/practice_4/person.js";
function Worker(name,age) {
    Person.apply(this,arguments);
    this.introduce=function () {
        return "My name is "+name+". I am "+age+" years old. I am a Worker. I have a job.";
    }
}
module.exports=Worker;