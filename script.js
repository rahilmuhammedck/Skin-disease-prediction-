document.getElementById("predictionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get user responses
    let q1 = document.getElementById("q1").value;
    let q2 = document.getElementById("q2").value;
    let q3 = document.getElementById("q3").value;
    let q4 = document.getElementById("q4").value;
    let q5 = document.getElementById("q5").value;
    let q6 = document.getElementById("q6").value;
    
    // Analyze responses to predict disease
    let predictedDisease = predictDisease(q1, q2, q3, q4, q5, q6);
    
    // Display the predicted disease
    document.getElementById("predictionResult").innerText = "Predicted Disease: " + predictedDisease;
});

function predictDisease(q1, q2, q3, q4, q5, q6) {
    // Analyze symptoms to predict disease
    if (q1 === "yes" && q2 === "yes") {
        return "Psoriasis";
    } else if (q3 === "yes") {
        return "Acne";
    } else if (q1 === "yes") {
        return "Eczema";
    } else if (q4 === "yes" && q5 === "yes") {
        return "Dermatitis";
    } // Add more conditions as needed
    
    // If none of the predefined conditions match, return "Can't predict"
    return "Can't predict, the image or inputs are not correct";
}