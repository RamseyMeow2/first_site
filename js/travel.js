document.getElementById('add').addEventListener('click', async function () {
    const from = document.getElementById('from').value;
    const url = `https://booking-com15.p.rapidapi.com/api/v1/meta/getExchangeRates?base_currency=${encodeURIComponent(from)}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6327a53544mshbec5f64fd893bfcp1dc327jsn92a7a240369e',
            'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        displayConversion(result);
    } catch (error) {
        console.error(error);
    }
});

function displayConversion(travelData) {
    const to = document.getElementById('to').value;
    const recipeContainer = document.getElementById('travel');
    recipeContainer.innerHTML = ''

    if (travelData) {
        const exchange_rates = travelData.data.exchange_rates;
        
        const rate = document.createElement('p');
        rate.textContent = "nah";

        for (let i = 0; i < exchange_rates.length; i++) {
            if (exchange_rates[i].currency == to) {
                rate.textContent = exchange_rates[i].exchange_rate_buy + " " + to;
            }
        }

        if (rate.textContent == "nah") {
            recipeContainer.textContent = 'No conversion found!';
        }

        recipeContainer.appendChild(rate);


    } else {
        recipeContainer.textContent = 'No conversion found!';
    }
}
