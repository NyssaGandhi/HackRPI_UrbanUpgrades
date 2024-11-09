// Function to add a new bar to the graph
function addBar(barGraphID, label, width, color) {
    // Create a new bar section
    const bar = document.createElement("div");
    bar.className = "bar";
    bar.style.width = width + "%";
    bar.style.backgroundColor = color;
    bar.energyType = label;
    bar.textContent = label + " (" + width + "%)";

    // Append the bar to the graph
    document.getElementById(barGraphID).appendChild(bar);
}

function showInfo(infoType) {
    const infoLabel = document.getElementById("infoLabel");
    infoLabel.textContent = "Some info about " + infoType + " energy";

    const infoBox = document.getElementById("infoBox");
    // Set content based on the button clicked
    switch (infoType) {
        case 'Coal':
            infoBox.textContent = "Coal is a type of fossil fuel. Burning it released CO2 into the atmosphere.";
            break;
        case 'Solar':
            infoBox.textContent = "Solar energy is a renewable energy harvested using solar panels.";
            break;
        case 'Hydro':
            infoBox.textContent = "Hydroelectric energy is a renewable source collected by spinning turbines with running water.";
            break;
        case 'Oil':
            infoBox.textContent = "Oil is icky";
            break;
        case 'Nuclear':
            infoBox.textContent = "Nuclear is pretty good but makes yucky nuclear waste";
            break;
        case 'Gas':
            infoBox.textContent = "Another type of fossil fuel commonly used that produces few emissions than coal, oil, etc.";
            break;
        case 'Wind':
            infoBox.textContent = "Another renewable energy";
            break;
        case 'Biomass':
            infoBox.textContent = "Burning biological material for energy";
            break;
        case 'Geothermal':
            infoBox.textContent = "A renewable energy that harnesses the power of the earth's heat.";
            break;
      default:
        infoBox.textContent = "Click on an energy source to learn more!";
    }
}

function addKeyEntry(label, color) {
    const keyItem = document.createElement("div");
    keyItem.className = "key-item";

    const colorBox = document.createElement("div");
    colorBox.className = "color-box";

    colorBox.style = `background-color: ${color}`;
    const labelBox = document.createElement("span");
    labelBox.textContent = label;

    keyItem.appendChild(colorBox);
    keyItem.appendChild(labelBox)
    document.getElementById("colorKey").appendChild(keyItem);
}

//to be parsed somehow
let sourceNames = ["Coal", "Oil", "Gas", "Nuclear", "Biomass", "Solar", "Hydro", "Wind", "Geothermal"];

const sources = [];

function addSource(name, isRenewable, initialPercent, proposedPercent, color) {
    sources.push( {
        name: name,
        isRenewable: isRenewable,
        initialPercent: initialPercent,
        proposedPercent: proposedPercent,
        color: color
    } )
}

addSource("Coal", false, 15, 10, "orange");
addSource("Oil", false, 10, 5, "red");
addSource("Gas", false, 30, 20, "yellow");
addSource("Nuclear", false, 6, 12, "purple");
addSource("Biomass", true, 4, 6, "goldenrod");
addSource("Solar", true, 15, 20, "lime");
addSource("Hydro", true, 10, 15, "blue");
addSource("Wind", true, 8, 10, "skyblue");
addSource("Geothermal", true, 2, 2, "pink");

function addSourceBars() {
    sources.forEach(source => {
        addBar("currentBarGraph", source.name, source.initialPercent, source.color);
        addBar("proposedBarGraph", source.name, source.proposedPercent, source.color);
    });
}

function addSourcesToKey() {
    sources.forEach(source => {
        addKeyEntry(source.name, source.color);
    });
}

addSourceBars();
addSourcesToKey();

// Select all elements of the specified type
const bars = document.querySelectorAll(".bar"); 

// Add the click event listener to each element
bars.forEach(bar => {
  bar.addEventListener('click', function() {
    // Your code to execute on click
    showInfo(bar.energyType);
  });
});