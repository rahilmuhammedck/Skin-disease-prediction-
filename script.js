document.getElementById("predictionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get user responses
    let q1 = document.getElementById("q1").value;
    let q2 = document.getElementById("q2").value;
    let q3 = document.getElementById("q3").value;
    let q4 = document.getElementById("q4").value;
    let q5 = document.getElementById("q5").value;
    
    // Analyze responses to predict disease
    let predictedDisease = "Unknown"; // Default value
    
    // Analyze symptoms to predict disease
    if (q1 === "yes" && q2 === "yes") {
        predictedDisease = "Psoriasis";
    } else if (q3 === "yes") {
        predictedDisease = "Acne";
    } else if (q1 === "yes" && q4 === "yes") {
        predictedDisease = "Eczema";
    }
    
    // Display the predicted disease
    document.getElementById("predictionResult").innerText = "Predicted Disease: " + predictedDisease;
});