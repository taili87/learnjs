//let a = 7 * undefined / "panama"; // NaN
//console.log(a);
/*
function beforeTryCatch(){
    let obj = undefined;
    console.log(obj.b);
    console.log('If the line of code throws an exception you\'ll never see this sentences.');
}

beforeTryCatch();
*/

function afterTryCatch() {
    try {
        let obj = undefined;
        console.log(obj.b);
        console.log('If the line of code throws an exception you\'ll never see this sentences.');
    } catch (error) {
        console.log('I caught an exception: ' + error.message);
    } finally {
        console.log('This will happen no matter what.');
    }

    console.log('My application is still running!');

}

afterTryCatch();

// Finally: run regardless my try making successfully not - clean up no resources that you dont need anymore


function calculation(obj) {
    if (!obj.hasOwnProperty('b')) {
        throw new Error('Object missing property.');
    }

    // continue with calculation with obj.b
}

function performHigherLevelOperation() {
    let obj = {};
    let value = 0;
    try {
        value = calculation(obj);
    } catch (error) {
        console.log(error.message);
    }

    if (value == 0) {
        // contingency
        // retry logic

    }
}

performHigherLevelOperation();