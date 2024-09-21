var category = 'inspirational';

        // Replace 'YOUR_API_KEY' with your actual API key
        var apiKey = 'hTYJRBoYeEiib/JpuUCirg==3KbrClqjGXuRo2fT';

        // Construct the URL with the specified category and API key
        var apiUrl = 'https://api.api-ninjas.com/v1/quotes?category=' + category;

        // Make a fetch request
        fetch(apiUrl, {
            method: 'GET',
            headers: {
                'X-Api-Key': apiKey,
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(result => {
            console.log(result);
            // Handle the result as needed
            var fin = JSON.stringify(result);;
            const obj = JSON.parse(fin);
            document.getElementById("qt").innerHTML = obj[0].quote;
        })
        .catch(error => {
            console.error('Error fetching quotes:', error.message);
        });