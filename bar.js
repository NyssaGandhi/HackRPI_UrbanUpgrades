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
      default:
        infoBox.textContent = "Click on an energy source to learn more!";
    }
  }

addBar("currentBarGraph", "Coal", 20, "orange");
addBar("currentBarGraph", "Solar", 40, "green");
addBar("currentBarGraph", "Hydro", 10, "blue");
addBar("currentBarGraph", "Oil", 20, "black");
addBar("currentBarGraph", "Nuclear", 10, "purple");

addBar("proposedBarGraph", "Coal", 10, "orange");
addBar("proposedBarGraph", "Solar", 45, "green");
addBar("proposedBarGraph", "Hydro", 20, "blue");
addBar("proposedBarGraph", "Oil", 15, "black");
addBar("proposedBarGraph", "Nuclear", 10, "purple");

// Select all elements of the specified type
const bars = document.querySelectorAll(".bar"); 

// Add the click event listener to each element
bars.forEach(bar => {
  bar.addEventListener('click', function() {
    // Your code to execute on click
    showInfo(bar.energyType);
  });
});