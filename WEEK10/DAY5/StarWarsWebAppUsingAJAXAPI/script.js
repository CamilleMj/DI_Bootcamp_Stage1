const yellowDiv = document.getElementById("yellowDiv");
const button = document.querySelector("button");

const fetchData = () => {
    yellowDiv.innerHTML = '<p>Loading...</p>';
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                const randomCharacter = getRandomCharacter(data.results);
                displayData(randomCharacter);
            } else {
                yellowDiv.innerHTML = '<p>Oh No! That person isnt available.</p>';
            }
        }
    };
    xhr.open("GET", "https://www.swapi.tech/api/people/");
    xhr.send();
};

const displayData = (character) => {
    yellowDiv.innerHTML = '';
    const { name, height, gender, birth_year, homeworld } = character;

    const characterInfo = document.createElement("div");
    characterInfo.classList.add("character-info");
    characterInfo.innerHTML = `
        <h2>Name: ${name}</h2>
        <p>Height: ${height}</p>
        <p>Gender: ${gender}</p>
        <p>Birth Year: ${birth_year}</p>
        <p>Homeworld: ${homeworld}</p>
    `;
    yellowDiv.appendChild(characterInfo);
};

button.addEventListener("click", fetchData);

const getRandomCharacter = (characters) => {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
};
