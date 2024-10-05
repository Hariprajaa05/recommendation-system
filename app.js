
const destinations = [
    {
        name: "Maldives",
        weather: "sunny",
        budget: "high",
        description: "The Maldives offer crystal-clear waters and luxury resorts.",
        img: "https://static.toiimg.com/thumb/msid-100486881,width-748,height-499,resizemode=4,imgsize-102540/.jpg"
    },
    {
        name: "Switzerland",
        weather: "cold",
        budget: "high",
        description: "Enjoy the stunning Alps and serene lakes.",
        img: "https://example.com/switzerland.jpghttps://static.toiimg.com/thumb/msid-113370310,width-748,height-499,resizemode=4,imgsize-216138/.jpg"
    },
    {
        name: "Thailand",
        weather: "sunny",
        budget: "low",
        description: "Beautiful beaches and budget-friendly travel options.",
        img: "https://static.toiimg.com/thumb/msid-97309417,width-748,height-499,resizemode=4,imgsize-201192/.jpg"
    },
    {
        name: "Japan",
        weather: "mild",
        budget: "medium",
        description: "Experience the rich culture and cherry blossoms.",
        img: "https://static.toiimg.com/thumb/msid-101699570,width-748,height-499,resizemode=4,imgsize-230446/.jpg"
    }
];

function recommendDestination() {
    const weatherPref = document.getElementById('weather').value;
    const budgetPref = document.getElementById('budget').value;

    const recommended = destinations.filter(dest => 
        dest.weather === weatherPref && dest.budget === budgetPref
    );

    displayDestinations(recommended);
}

function displayDestinations(destinations) {
    const destinationList = document.getElementById('destination-list');
    destinationList.innerHTML = ""; // Clear previous results

    destinations.forEach(dest => {
        const destinationDiv = document.createElement('div');
        destinationDiv.classList.add('destination');

        destinationDiv.innerHTML = `
            <div>
                <h4>${dest.name}</h4>
                <p>${dest.description}</p>
            </div>
            <img src="${dest.img}" alt="${dest.name}">
        `;

        destinationList.appendChild(destinationDiv);
    });

    if (destinations.length === 0) {
        destinationList.innerHTML = "<p>No destinations match your preferences.</p>";
    }
}
