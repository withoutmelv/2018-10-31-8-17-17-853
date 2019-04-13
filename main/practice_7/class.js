function Class(num) {
    this.number=num;
    this.getDisplayName=function () {
        return "Class "+num;
    };
}
module.exports=Class;