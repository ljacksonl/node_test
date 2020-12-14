function create_counter(initial) {
    var x = initial || 0;
    return {
        inc: function () {
            x += 1;
            return x;
        }
    }
}

var c1 = create_counter();
console.log(c1.inc()); //1
console.log(c1.inc()); //2
console.log(c1.inc()); //3


var c2 = create_counter(10);
console.log(c2.inc()); //11
console.log(c2.inc()); //12
console.log(c2.inc()); //13