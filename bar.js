// Function to add a new bar to the graph
function addBar(barGraphID, label, width, color) {
    // Create a new bar section
    const bar = document.createElement("div");
    bar.className = "bar";
    bar.style.width = width + "%";
    bar.style.backgroundColor = color;
    bar.energyType = label;
    const text = document.createElement("span");
    text.textContent = label + " (" + width + "%)";   
    bar.appendChild(text); 

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

function addBars(){
  //Clear current bars/sources
  sources.length = 0;
  while(document.getElementById("currentBarGraph").firstChild){
    document.getElementById("currentBarGraph").removeChild(document.getElementById("currentBarGraph").firstChild);
  }
  while(document.getElementById("proposedBarGraph").firstChild){
    document.getElementById("proposedBarGraph").removeChild(document.getElementById("proposedBarGraph").firstChild);
  }
  while(document.getElementById("colorKey").firstChild){
    document.getElementById("colorKey").removeChild(document.getElementById("colorKey").firstChild);
  }

  //Get percentages from subregion data array
  //Data Indexes: Coal-124, Oil-125, etc
  let coalPercentage = dataarray[124]
  coalPercentage = coalPercentage.substring(0, (coalPercentage.length - 1));
  let oilPercentage = dataarray[125]
  oilPercentage = oilPercentage.substring(0, (oilPercentage.length - 1));
  let gasPercentage = dataarray[126]
  gasPercentage = gasPercentage.substring(0, (gasPercentage.length - 1));
  let nuclearPercentage = dataarray[127]
  nuclearPercentage = nuclearPercentage.substring(0, (nuclearPercentage.length - 1));
  let biomassPercentage = dataarray[128]
  biomassPercentage = biomassPercentage.substring(0, (biomassPercentage.length - 1));
  let solarPercentage = dataarray[129]
  solarPercentage = solarPercentage.substring(0, (solarPercentage.length - 1));
  let hydroPercentage = dataarray[130]
  hydroPercentage = hydroPercentage.substring(0, (hydroPercentage.length - 1));
  let windPercentage = dataarray[131]
  windPercentage = windPercentage.substring(0, (windPercentage.length - 1));
  let geothermalPercentage = dataarray[132]
  geothermalPercentage = geothermalPercentage.substring(0, (geothermalPercentage.length - 1));


  addSource("Coal", false, coalPercentage, 10, "orange");
  addSource("Oil", false, oilPercentage, 5, "red");
  addSource("Gas", false, gasPercentage, 20, "goldenrod");
  addSource("Nuclear", false, nuclearPercentage, 12, "purple");
  addSource("Biomass", true, biomassPercentage, 6, "green");
  addSource("Solar", true, solarPercentage, 20, "lime");
  addSource("Hydro", true, hydroPercentage, 15, "blue");
  addSource("Wind", true, windPercentage, 10, "skyblue");
  addSource("Geothermal", true, geothermalPercentage, 2, "pink");

  addSourceBars();
  addSourcesToKey();
  addClickFunctionality();
}

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

function addClickFunctionality() {
    // Select all elements of the specified type
    const bars = document.querySelectorAll(".bar"); 
    
    // Add the click event listener to each element
    bars.forEach(bar => {
      bar.addEventListener('click', function() {
        // Your code to execute on click
        showInfo(bar.energyType);
      });
    });
}
