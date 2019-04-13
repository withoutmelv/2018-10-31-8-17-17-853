import Person from "../../main/practice_3/person.js";
function Worker() {
    Person.apply(this,arguments);
    this.introduce=function () {
        return "I am a Worker. I have a job.";
    };
}
module.exports=Worker;