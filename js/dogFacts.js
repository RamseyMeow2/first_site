var btn = document.querySelector('#doggoAdd');

btn.addEventListener('click', function () {
    fetch('https://dogapi.dog/api/v2/facts?limit=1')
      .then(res => res.json())
      .then(data => {
        var fact = data.data[0].attributes.body;
        document.getElementById('fact').innerHTML = fact;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        document.getElementById('fact').innerHTML = 'Failed to fetch the fact. Please try again later.';
      });

  })