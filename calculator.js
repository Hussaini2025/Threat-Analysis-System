// ==========================================
// calculator.js
// Threat Analysis & Vulnerability Assessment
// ==========================================

function calculateRisk() {

    // Get input values
    let likelihood = document.getElementById("likelihood").value;
    let impact = document.getElementById("impact").value;

    let result = document.getElementById("riskResult");

    // Validate input
    if (likelihood === "" || impact === "") {

        result.innerHTML = `
            <h3>Risk Assessment</h3>
            <p style="color:red;">
                Please enter both Likelihood and Impact values.
            </p>
        `;

        return;
    }

    // Convert to numbers
    likelihood = parseInt(likelihood);
    impact = parseInt(impact);

    // Calculate Risk Score
    let score = likelihood * impact;

    let level = "";
    let recommendation = "";

    // Determine Risk Level
    if (score <= 5) {

        level = "Low";
        recommendation = "Continue monitoring and maintain existing security controls.";

    } else if (score <= 10) {

        level = "Medium";
        recommendation = "Review security measures and apply necessary improvements.";

    } else if (score <= 15) {

        level = "High";
        recommendation = "Implement security controls immediately to reduce the risk.";

    } else {

        level = "Critical";
        recommendation = "Urgent action is required. Address vulnerabilities immediately.";

    }

    // Display Result
    result.innerHTML = `

        <h3>Risk Assessment Result</h3>

        <hr>

        <p><strong>Likelihood:</strong> ${likelihood}</p>

        <p><strong>Impact:</strong> ${impact}</p>

        <p><strong>Risk Score:</strong> ${score}</p>

        <p><strong>Risk Level:</strong> ${level}</p>

        <h4>Recommendation</h4>

        <p>${recommendation}</p>

    `;
}