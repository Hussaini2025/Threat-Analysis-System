// =========================================
// Dashboard JavaScript
// Threat Analysis & Vulnerability Assessment
// =========================================

// Dashboard statistics
const dashboard = {
    threats: 12,
    vulnerabilities: 7,
    highRisk: 3,
    protectedSystems: 15
};

// Print statistics
console.log("===== Dashboard Statistics =====");
console.log("Total Threats:", dashboard.threats);
console.log("Vulnerabilities:", dashboard.vulnerabilities);
console.log("High Risk Systems:", dashboard.highRisk);
console.log("Protected Systems:", dashboard.protectedSystems);

// Recent security alerts
const alerts = [

    {
        date: "30 Jul 2026",
        threat: "Phishing Email",
        severity: "High",
        status: "Blocked"
    },

    {
        date: "29 Jul 2026",
        threat: "Malware Detected",
        severity: "Critical",
        status: "Removed"
    },

    {
        date: "28 Jul 2026",
        threat: "SQL Injection Attempt",
        severity: "Medium",
        status: "Prevented"
    },

    {
        date: "27 Jul 2026",
        threat: "Weak Password",
        severity: "Low",
        status: "Resolved"
    }

];

// Display alerts in console
console.log("===== Recent Alerts =====");

alerts.forEach(function(alert){

    console.log(
        alert.date +
        " | " +
        alert.threat +
        " | " +
        alert.severity +
        " | " +
        alert.status
    );

});

// Security status
const securityStatus = {

    firewall: "Active",

    antivirus: "Running",

    monitoring: "Enabled",

    encryption: "AES-256",

    backup: "Completed"

};

console.log("===== Security Status =====");
console.log(securityStatus);

// Show welcome message
window.onload = function(){

    console.log("Dashboard Loaded Successfully");

};

// Simulated refresh
function refreshDashboard(){

    console.log("Refreshing Dashboard...");

    setTimeout(function(){

        console.log("Dashboard Updated Successfully.");

    },1000);

}

// Auto refresh every 20 seconds
setInterval(refreshDashboard,20000);