//Exercise 1 : Giphy API
console.log("Starting ...")

const giPhy = () => {
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
            console.log(`${q.string.hilarious} ${rating.string.g} ${api_key.string.hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My}`)
        })
        .catch(function (error) {
            console.log(`We got the error ${error}`)
        });
    console.log("Work Done ...")
}

giPhy();

//Exercise 2 : Giphy API
console.log("Starting ...")

const myGiphy = () => {
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
            console.log(`${q.sun} ${rating.g} ${limit.int10} ${offset.int2} ${api_key.hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My}`)
        })
        .catch(function (error) {
            console.log(`We got the error ${error}`)
        });
    console.log("Work Done ...")
}

myGiphy();

//Exercise 3 : Async Function
fetch("https://www.swapi.tech/api/starships/9/")
    .then(response => response.json())
    .then(objectStarWars => console.log(objectStarWars.result));

const fetchAPI = async (endpoint) => {
    const response = await fetch(endpoint);
    console.log("response", response)
    let data = await response.json();
    console.log(data);
    let starWars = objectStarWars.result;
    console.log(`${starWars}`);
}
fetchAPI("https://www.swapi.tech/api/starships/9/");

//Exercise 4: Analyze
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall(); //calling
            //waiting 2 seconds
           //resolved
//ANS undefined