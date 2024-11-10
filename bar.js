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
    infoLabel.textContent = infoType + " Energy";

    const infoBox = document.getElementById("infoBox");
    // Set content based on the button clicked
    switch (infoType) {
        case 'Coal':
            infoBox.textContent = "Coal is a non-renewable energy source that is mined and burned. Burning it released CO2 and other pollutants into the atmosphere.";
            break;
        case 'Solar':
            infoBox.textContent = "Solar energy is a renewable energy source that is harvested from the sun using solar panels. This technology is often expensive and produces variable energy depending on the day and the weather.";
            break;
        case 'Hydro':
            infoBox.textContent = "Hydroelectric energy is a renewable energy source collected by spinning turbines with running water.";
            break;
        case 'Oil':
            infoBox.textContent = "Oil is a non-renewable energy source that is collected from underground and burned. Burning it releases CO2 and other pollutants into the atmosphere.";
            break;
        case 'Nuclear':
            infoBox.textContent = "Nuclear energy is a non-renewable energy source that uses fission, which is a process where radioactive atoms split apart and release energy. This source produces radioactive waste which must be stored safely.";
            break;
        case 'Gas':
            infoBox.textContent = "Gas is a non-renewable energy source that is collected Another type of fossil fuel commonly used that produces few emissions than coal, oil, etc.";
            break;
        case 'Wind':
            infoBox.textContent = "Oil is a non-renewable energy source that is collected from underground and burned. Burning it releases CO2 and other pollutants into the atmosphere, though it burns cleaner than other fossil fuels.";
            break;
        case 'Biomass':
            infoBox.textContent = "Biomass is a renewable energy source involving burning biological material like wood or biofuel for energy. Although renewable, this source releases air pollutants similarly to fossil fuels.";
            break;
        case 'Geothermal':
            infoBox.textContent = "Geothermal energy is a renewable energy source that is collected by using hot water from underground, turning it into steam, and spinning turbines. Geothermal plants require an underground source of water heated by the Earth's heat.";
            break;
      default:
        infoBox.textContent = "Hover over an energy source to learn more!";
    }
}

function addKeyEntry(label, color) {
    const keyItem = document.createElement("div");
    keyItem.className = "key-item";

    const colorBox = document.createElement("div");
    colorBox.className = "color-box";
    colorBox.style = `background-color: ${color}`;

    const labelBox = document.createElement("span");
    labelBox.className = "key-label";
    labelBox.textContent = label;

    const addButton = document.createElement("button");
    addButton.className = "add-button";
    addButton.textContent = "Add";
    switch (label) {
      case "Coal": 
      addButton.onclick = function() { 
        addCoalPlant(); 
        addBars(); 
      }; 
      break;
    case "Oil": 
      addButton.onclick = function() { 
        addOilPlant(); 
        addBars(); 
      }; 
      break;
    case "Gas": 
      addButton.onclick = function() { 
        addGasPlant(); 
        addBars(); 
      }; 
      break;
    case "Nuclear": 
      addButton.onclick = function() { 
        addNuclearPlant(); 
        addBars(); 
      }; 
      break;
    case "Biomass": 
      addButton.onclick = function() { 
        addBiomassPlant(); 
        addBars(); 
      }; 
      break;
    case "Solar": 
      addButton.onclick = function() { 
        addSolarPlant(); 
        addBars(); 
      }; 
      break;
    case "Hydro": 
      addButton.onclick = function() { 
        addHydroPlant(); 
        addBars(); 
      }; 
      break;
    case "Wind": 
      addButton.onclick = function() { 
        addWindPlant(); 
        addBars(); 
      }; 
      break;
    case "Geothermal": 
      addButton.onclick = function() { 
        addGeoPlant(); 
        addBars(); 
      }; 
      break;
    }

    keyItem.appendChild(colorBox);
    keyItem.appendChild(labelBox);
    keyItem.appendChild(addButton);
    document.getElementById("colorKey").appendChild(keyItem);
}

//to be parsed somehow
const sourceNames = ["Coal", "Oil", "Gas", "Nuclear", "Biomass", "Solar", "Hydro", "Wind", "Geothermal"];
const colors = ["#FF8C8C", "#FFB07A", "#F9F38A", "#A8F5A0", "#7EC6D1", "#7A98E5", "#9A92E5", "#FF9BCC", "#FF8C9A"];
let addedSourcename;

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


  //Data Indexes: Coal-108, Oil-109, etc
  //Get production values and ensure they're numbers
  let coalPro = parseFloat(dataarray[108]) || 0;
  let oilPro = parseFloat(dataarray[109]) || 0;
  let gasPro = parseFloat(dataarray[110]) || 0;
  let nuclearPro = parseFloat(dataarray[111]) || 0;
  let biomassPro = parseFloat(dataarray[112]) || 0;
  let solarPro = parseFloat(dataarray[113]) || 0;
  let hydroPro = parseFloat(dataarray[114]) || 0;
  let windPro = parseFloat(dataarray[115]) || 0;
  let geothermalPro = parseFloat(dataarray[116]) || 0;


  let offset = 15000000;

  if(addedSourcename != ""){
    console.log("adding offset")
    switch(addedSourcename){  
      case "coal": coalPro += offset; console.log("coaloffseted"); break;
      case "oil": oilPro += offset; console.log("oiloffseted"); break;
      case "gas": gasPro += offset; break;
      case "nuclear": nuclearPro += offset; break;
      case "biomass": biomassPro += offset; break;
      case "solar": solarPro += offset; break;
      case "hydro": hydroPro += offset; break;
      case "wind": windPro += offset; break;
      case "geo": geothermalPro += offset; break;
      default: // TODO add no-selection case
    }
  }

  let total = coalPro + oilPro + gasPro + nuclearPro + biomassPro + solarPro + hydroPro + windPro + geothermalPro;
  if (total === 0) {
    console.error("Total production is zero, cannot calculate estimated percentages.");
    return; // Exit the function if total is 0 to avoid NaN errors
  }else{
    console.log(total);
    console.log(addedSourcename);
  }

  let coalEstPerc = parseFloat((coalPro / total * 100).toFixed(1));
  let oilEstPerc = parseFloat((oilPro / total * 100).toFixed(1));
  let gasEstPerc = parseFloat((gasPro / total * 100).toFixed(1));
  let nuclearEstPerc = parseFloat((nuclearPro / total * 100).toFixed(1));
  let biomassEstPerc = parseFloat((biomassPro / total * 100).toFixed(1));
  let solarEstPerc = parseFloat((solarPro / total * 100).toFixed(1));
  let hydroEstPerc = parseFloat((hydroPro / total * 100).toFixed(1));
  let windEstPerc = parseFloat((windPro / total * 100).toFixed(1));
  let geothermalEstPerc = parseFloat((geothermalPro / total * 100).toFixed(1));  
  
  addSource("Coal", false, coalPercentage, coalEstPerc, colors[0]);
  addSource("Oil", false, oilPercentage, oilEstPerc, colors[1]);
  addSource("Gas", false, gasPercentage, gasEstPerc, colors[2]);
  addSource("Nuclear", false, nuclearPercentage, nuclearEstPerc, colors[3]);
  addSource("Biomass", true, biomassPercentage, biomassEstPerc, colors[4]);
  addSource("Solar", true, solarPercentage, solarEstPerc, colors[5]);
  addSource("Hydro", true, hydroPercentage, hydroEstPerc, colors[6]);
  addSource("Wind", true, windPercentage, windEstPerc, colors[7]);
  addSource("Geothermal", true, geothermalPercentage, geothermalEstPerc, colors[8]);

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
      bar.addEventListener('mouseover', function() {
        // Your code to execute on click
        showInfo(bar.energyType);
      });
    });
}
