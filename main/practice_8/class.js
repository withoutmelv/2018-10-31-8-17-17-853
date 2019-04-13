function Class(num) {
    this.number=num;
    this.getDisplayName=function () {
        return "Class "+num;
    };
    this.assignLeader=function (student) {
        if (student.isLeader===1&&num===student.klass.number){
            this.leader=student;
            student.introduce=function () {
                return "My name is "+student.name+". I am "+student.age+" years old. I am a Student. I am Leader of Class "+student.klass.number+".";
            }
        }else{
            return "My name is "+student.name+". I am "+student.age+" years old. I am a Student. I am at Class "+student.klass.number+"."
        }
    };

}
module.exports=Class;
