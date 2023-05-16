// create a function using module pattern

var counter = (function(){
    // Private stuff - not acccessible calling counter .

    let value_count = 0;

function print(message){
    console.log(message + ' --- ' + value_count );
}
    // return an object full of properties

    return {
        //value : value_count,

        // create a get function 
        get:function(){
            return value_count;
        },

        set: function(value){
            value_count = value;
        },

        increment: function(){
            value_count++;
            print('After increment: ');
        },

        reset: function(){
            print('Before reset: ');
            value_count = 0;
            print('After reset: ');
        }
    }


})();
counter.increment();
counter.increment();
counter.increment();

// create a closure 
//console.log(counter.value);

counter.set(10);
console.log(counter.get());

counter.reset();
/*
After increment:  --- 1
After increment:  --- 2
After increment:  --- 3
0
Before reset:  --- 3
After reset:  --- 0
Thiam:code-interviews 

*/




let counter  = (function(){
    let count = 0;

    function print(message){
        console.log(`${message} => ${count}`);
    }

    function getCount(){return count;}
    function setCount(value ){count = value;}

    function incrementCount(){
        count++;
        print('After increment: ');

    }

    function resetCount(){
        print('Before reset: ');
        count = 0;
        print('After reset: ')
    }

    return {
        get: getCount,
        set: setCount,
        increment: incrementCount,
        reset: resetCount
    }
})();