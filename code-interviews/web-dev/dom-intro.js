(function(){
    function clickHandler(message){
        console.log('Hi....' + message);
    }

    // Get a reference to myButton

    let myButton = document.getElementById('myButton');
    myButton.addEventListener('click', function() {clickHandler('Hi from IIFI')});
})();