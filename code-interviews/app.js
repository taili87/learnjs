
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