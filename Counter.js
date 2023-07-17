var counter = function (n) {
    return function () {
        console.log(n);
        n++;
        
    };
};
var a = counter(10);
a();//10
a();//11
a();//12

