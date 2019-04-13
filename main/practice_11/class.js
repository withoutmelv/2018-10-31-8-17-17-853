function Class(num){
    let all;
    let app;
    this.number=num;
    this.getDisplayName=function () {
        return "Class "+num;
    };


    this.registerAssignLeaderListener=function (teacher) {
        //console.log(teacher.name);
    };


    this.registerJoinListener=function (teacher) {
        //console.log(teacher.name);
    };


    this.assignLeader=function (student) {
        all=student;
        if (student.isLeader===1&&num===student.klass.number){
            this.leader=student;
            student.introduce=function () {
                return "My name is "+student.name+". I am "+student.age+" years old. I am a Student. I am Leader of Class "+student.klass.number+".";
            }
        }else{
            console.log("It is not one of us.");
        }
        console.log("I am Tom. I know "+all.name+" become Leader of Class "+all.klass.number+".");
    };
    
    
    this.appendMember=function (student) {
        student.klass=this;
        app=student;
        console.log("I am Tom. I know "+app.name+" has joined Class "+app.klass.number+".");
    };
}
module.exports=Class;

