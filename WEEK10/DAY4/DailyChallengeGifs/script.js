console.log("Starting ...")

const addGif = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    const objBody = {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(data)),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    }

const randomGif = () => {
    console.log("Working ...")
    fetch("https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
        .then((response) => {
            if(response.ok){
                return response.json()
            } else {
                throw new Error("Error")
            }
        })
        .then((obj) => {
            console.log(obj);
            console.log(`${q.sun} ${rating.g} ${api_key.hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My}`)
        })
        .catch(function (error) {
            console.log(`We got the error ${error}`)
        });
    console.log("Work Done ...")
}};

const formData = document.querySelector("form");
formData.addEventListener("submit", addGif);

const deleteButtons = document.getElementById("deleteButton");

    deleteButtons.addEventListener('click', () => {
        formData.remove();
    });

randomGif();