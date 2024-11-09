// Form submission event listener
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents page refresh
    
    // Get the name input value
    const zip = document.getElementById("zip").value;

    // Display the name on Page 2
    document.getElementById("zipCode").textContent = zip;

    // Switch to Page 2
    document.getElementById("page1").classList.remove("active");
    document.getElementById("page2").classList.add("active");
});

// Function to go back to Page 1
function goBack() {
    document.getElementById("page2").classList.remove("active");
    document.getElementById("page1").classList.add("active");
}