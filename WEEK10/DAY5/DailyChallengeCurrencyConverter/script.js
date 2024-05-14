console.log("Starting ...")

const moneyConvert = () => {
    console.log("Working ...")
    fetch("https://v6.exchangerate-api.com/v6/c8f32bb84187e487c436dc68/codes")
        .then((response) => {
            if(response.ok){
                return response.json()
            } else {
                throw new Error("Failed to fetch supported currencies")
            }
        })
        .then((data) => {
            const supportedCodes = data.supported_codes;
            console.log("Supported Currency Codes:");
            supportedCodes.forEach(code => {
                console.log(`${code[0]} - ${code[1]}`);
            });
        })
        .catch(function (error) {
            console.log("Error:", error.message);
        });
    console.log("Work Done ...")
}

moneyConvert();
