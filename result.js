function showEndScreen() {
    // Display the overlay and show results
    document.getElementById('endScreen').style.display = 'flex';
    document.getElementById('resultText').innerText = generateResultsText();
    document.getElementById('resultTitle').innerText = generateResultsTitle();
    document.getElementById('resultRating').innerText = "Rating: " + generateResultsRating();
}

function hideEndScreen() {
    // Hide the overlay
    document.getElementById('endScreen').style.display = 'none';
}

// Function to generate results text (example function, replace with your logic)
function generateResultsText() {
    switch (addedSourcename) {
        case "coal": 
            return "Coal is a cheap option for producing lots of power! Unfortunately, it produces lots of bad pollutants like CO2, SO2, and particulate matter. New York is bad for coal, since there are no coal mines in New York, and there are also no more coal plants!";
        case "oil":
            return "Oil is expensive and produces a lot of pollutants which are bad for the environment. Oil is better used in fuel for cars. The New York power grid barely uses any oil at all."
        case "gas":
            return "Gas is not the cheapest option, but it is pretty cheap! It produces less pollutants than coal, but also produces pollutants when you extract it from the ground! Gas is the best non-renewable energy source across the United States.";
        case "nuclear":
            return "Nuclear energy is a very good energy source! It is non-renewable, but it only uses a little bit of uranium, and can be built anywhere! Unfortunately, Nuclear plants are very expensive to build.";
        case "biomass":
            return "Biomass is great in New York! New York has lots of farms to grow biofuel, and burning biofuel is carbon-neutral; burning the biofuel releases carbon, but growing it captures the carbon again! Unfortunately, it still releases particulate matter into the air.";
        case "solar":
            return "Solar is a popular renewable energy source, but it isn't great in New York. Solar Panels can often be found on the roofs of buildings, but producing a lot of power needs a lot of solar panels, and a lot of space! New York's open space is better used for farming food and biofuel.";
        case "wind":
            return "Wind farms are a great energy source, but they need large, flat areas to be effective. They work well with farms, but they work even better with water! Think about how flat a lake is! New York is working on building big offshore windfarms, near the Great Lakes.";
        case "hydro":
            return "Hydro power a great renewable energy source! It needs a lot of flowing water, and New York has Niagra Falls, a huge source of running water!";
        case "geo":
            return "Geothermal plants are a super cool renewable energy source, but they have very specific requirements. There needs to be molten lava far below the surface, and we can only reach that hot lava along tectonic plate fault lines. Kind of like an underground volcano! Unfortunately, there aren't many good spots in New York.";
        default:
            return "The people in your city don't have any power! Even though there's no pollution and lots of space, the people still need power!";
    }
}

function generateResultsTitle() {
    switch (addedSourcename) {
        case "coal": 
            return "Coal Plant"
        case "oil":
            return "Oil Plant"
        case "gas":
            return "Natural Gas";
        case "nuclear":
            return "Nuclear Plant";
        case "biomass":
            return "Biomass Plant";
        case "solar":
            return "Solar Panels";
        case "wind":
            return "Wind Turbines";
        case "hydro":
            return "Hydro Power";
        case "geo":
            return "Geothermal Power";
        default:
            return "No Power";
    }
}

function generateResultsRating() {
    switch (addedSourcename) {
        case "coal": 
            return 2
        case "oil":
            return 1
        case "gas":
            return 2;
        case "nuclear":
            return 4;
        case "biomass":
            return 4;
        case "solar":
            return 3;
        case "wind":
            return 4;
        case "hydro":
            return 5;
        case "geo":
            return 2;
        default:
            return "-";
    }
}