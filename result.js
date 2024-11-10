function showEndScreen() {
    // Display the overlay and show results
    document.getElementById('endScreen').style.display = 'flex';
    document.getElementById('resultText').innerText = generateResultsText(); // Replace with your actual results
}

function hideEndScreen() {
    // Hide the overlay
    document.getElementById('endScreen').style.display = 'none';
}

// Function to generate results text (example function, replace with your logic)
function generateResultsText() {
    return "Your calculated energy breakdown and potential improvements.";
}