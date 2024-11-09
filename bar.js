// Function to add a new bar to the graph
function addBar(barGraphID, label, width, color) {
    // Create a new bar section
    const bar = document.createElement("div");
    bar.className = "bar";
    bar.style.width = width + "%";
    bar.style.backgroundColor = color;
    bar.textContent = label + " (" + width + "%)";

    // Append the bar to the graph
    document.getElementById(barGraphID).appendChild(bar);
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