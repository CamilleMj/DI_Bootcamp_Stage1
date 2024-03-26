document.addEventListener('DOMContentLoaded', function() {
    const colorPalette = document.getElementById('colorPalette');
    const blankSquaresContainer = document.getElementById('blankSquares');
    let isMouseDown = false;

    // Event listener for color squares
    colorPalette.addEventListener('click', function(event) {
        if (event.target.classList.contains('square')) {
            const selectedColor = event.target.style.backgroundColor;
            blankSquaresContainer.addEventListener('mousedown', function(event) {
                isMouseDown = true;
                if (event.target.classList.contains('newSquares')) {
                    event.target.style.backgroundColor = selectedColor;
                }
            });

            document.addEventListener('mousemove', function(event) {
                if (isMouseDown && event.target.classList.contains('newSquares')) {
                    event.target.style.backgroundColor = selectedColor;
                }
            });

            document.addEventListener('mouseup', function() {
                isMouseDown = false;
            });
        }
    });

    // Event listener for clear button
    const clearButton = document.querySelector('#myButton');
    clearButton.addEventListener('click', function() {
        const blankSquares = document.querySelectorAll('.newSquares');
        blankSquares.forEach(square => {
            square.style.backgroundColor = '#3b3b3b97';
        });
    });

    // Generate color squares
    for (let i = 0; i < 22; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        const box = document.querySelectorAll(".square");
        const colors = ['#d40000', '#d43000', '#d48400', '#9c9c00', '#617b14', '#1f6d06', '#006300', '#10a197', '#00d4d4', '#004878', '#005bc0', '#0000d4', '#00006d', '#350066', '#6d006d', '#770577', '#5c0003', '#292e30', '#5d666a', '#282c2f', '#0e1011'];
        box.forEach((cell, index) => {
        cell.style.backgroundColor = colors[index % colors.length];
        });
        colorPalette.appendChild(square);
    }

    // Generate blank squares
    for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 10; j++) {
            const square = document.createElement('div');
            square.classList.add('newSquares');
            blankSquaresContainer.appendChild(square);
        }
    }
});
