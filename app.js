// ======================================
// Threat Analysis Project
// app.js
// ======================================

// Welcome Message
window.onload = function () {
    console.log("Threat Analysis and Vulnerability Assessment System Loaded Successfully.");

    alert("Welcome to the Threat Analysis and Vulnerability Assessment System");
};

// ======================================
// Dashboard Statistics
// ======================================

let totalThreats = 12;
let totalVulnerabilities = 7;
let highRiskSystems = 3;

console.log("Threats:", totalThreats);
console.log("Vulnerabilities:", totalVulnerabilities);
console.log("High Risk Systems:", highRiskSystems);

// ======================================
// Risk Calculator Function
// ======================================

function calculateRisk(likelihood, impact) {

    let score = likelihood * impact;

    let level = "";

    if (score <= 5) {
        level = "Low";
    }
    else if (score <= 10) {
        level = "Medium";
    }
    else if (score <= 15) {
        level = "High";
    }
    else {
        level = "Critical";
    }

    return {
        score: score,
        level: level
    };
}

// Example

let risk = calculateRisk(4, 4);

console.log("Risk Score:", risk.score);
console.log("Risk Level:", risk.level);

// ======================================
// Threat Database
// ======================================

const threats = [

    {
        name: "Phishing",
        severity: "High"
    },

    {
        name: "Malware",
        severity: "Critical"
    },

    {
        name: "Ransomware",
        severity: "Critical"
    },

    {
        name: "SQL Injection",
        severity: "High"
    },

    {
        name: "Cross Site Scripting",
        severity: "Medium"
    },

    {
        name: "Password Attack",
        severity: "Medium"
    }

];

console.log("Threat Database");

threats.forEach(function(threat){

    console.log(threat.name + " - " + threat.severity);

});

// ======================================
// Security Recommendations
// ======================================

const recommendations = [

    "Use Strong Passwords",

    "Enable Multi-Factor Authentication",

    "Update Operating System Regularly",

    "Install Antivirus Software",

    "Backup Important Data",

    "Use a Firewall",

    "Monitor Network Traffic"

];

console.log("Security Recommendations");

recommendations.forEach(function(item){

    console.log(item);

});

// ======================================
// Simulated Vulnerability Scan
// ======================================

function runScan(){

    const findings = [

        "Open Port 21 (FTP)",

        "Weak Password Detected",

        "Operating System Requires Update",

        "Firewall Enabled",

        "No Malware Detected"

    ];

    console.log("Starting Scan...");

    findings.forEach(function(result){

        console.log(result);

    });

    console.log("Scan Completed Successfully.");

}

// Run Scan Automatically

runScan();

// ======================================
// Current Date
// ======================================

const today = new Date();

console.log("Today's Date:", today.toDateString());

// ======================================
// End
// ======================================

console.log("Threat Analysis Project Ready.");