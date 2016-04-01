/**
 * Created by vanhung on 4/1/2016.
 */
var ClassA= function () {

    this.add= function () {
        console.log("from clasas A");
    }
}

var ClassB= function () {
    this.add= function () {
        console.log("from class B");
        ClassB.prototype.add();
    }
}

ClassB.prototype=new ClassA();

ClassA.prototype.test= function () {
    console.log('test A');
}


ClassB.prototype.test= function () {
    ClassA.prototype.test();
}
ClassB.prototype.name="vanhung";


