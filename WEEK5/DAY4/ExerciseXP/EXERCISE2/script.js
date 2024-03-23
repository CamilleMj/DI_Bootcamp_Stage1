document.addEventListener("DOMContentLoaded", function() {

    function myMove() {
        let container = document.getElementById("container");
        let animate = document.getElementById("animate");
        let pos = 0;
    
        let movingObject = setInterval(frame, 1);
    
        function frame() {
            if (pos >= container.offsetWidth - animate.offsetWidth) {
                clearInterval(movingObject); 
            } else {
                pos++;
                animate.style.left = pos + 'px';
            }
        }
    }

    let button = document.querySelector('button');

    button.addEventListener('click', function() {
        myMove();
    });
});