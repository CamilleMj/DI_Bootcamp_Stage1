const planetSolarSystem = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

planetSolarSystem.forEach(planet => {
    const newDiv = document.createElement("div");
    newDiv.textContent = planet;
    newDiv.classList.add('planet');
    newDiv.classList.add(planet-${0, 1, 2, 3, 4, 5, 6, 7});
    newDiv.style.backgroundColor = getRandomColor();
    document.body.appendChild(newDiv);
});