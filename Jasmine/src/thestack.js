'use strict';

var array = [];

var thestack = function () {
    var count = 0;
    var size1 = function () {
        return count;
    }
    var push1 = function (item) {
        count++;
        array.push(item);
    }
    var pop1 = function() {
        if (count > 0) {
            count--;
            return array.pop();
        
        } 
        return '';
    }
    return {
        size: size1,
        push: push1,
        pop: pop1
    }
}