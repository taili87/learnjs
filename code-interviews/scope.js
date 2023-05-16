let outside_scope = 'Outside';

function scopTest() {
    console.log(outside_scope);

    if(outside_scope != ''){ // if outside_scope is not equal to empty string then can we still see the value of outside_scope 
        console.log(outside_scope);
    }
   
    
}

let m = scopTest;
m();


// Second 

let inside_scope = 'second';
function insideTest(){
    console.log(inside_scope);
    let b = 'First';

    if(inside_scope != ''){
        console.log(inside_scope);
        console.log('Inside if statement: ' + b);

        let c = 'Third';
    }
}
insideTest();