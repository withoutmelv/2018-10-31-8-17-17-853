function Person(isLeader,name,age){
    this.isLeader=isLeader;
    this.name=name;
    this.age=age;
    this.introduce=function () {
        return "My name is "+name+". I am "+age+" years old.";
    }
}
module.exports=Person;
