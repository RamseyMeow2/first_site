var inputval = document.querySelector('#stateInput')
var btn = document.querySelector('#add');
var locations = document.querySelector('#locations')

btn.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputval.value + '&appid=' + apik)
        .then(res => res.json())
        .then(data => {
            var temperature = data['main']['temp'];
            temperature = convertion(temperature);
            var message;
            if (temperature >= 27) {
                message = "It's too hot to take your pet out!";
            } else if (temperature >= 20 && temperature < 27) {
                message = "It's a great day to take your pet out!";
            } else if (temperature >= 10 && temperature < 20) {
                message = "It's a bit chilly to take your pet out!";
            } else if (temperature < 10) {
                message = "It's too cold to take your pet out!";
            }
            temp.innerHTML = `Temperature: <span>${temperature} C</span><br>${message}`;
        })
        .catch(err => alert('You entered Wrong city name'))
})