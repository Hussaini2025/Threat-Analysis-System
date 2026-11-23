// =========================================
// scanner.js
// Threat Analysis & Vulnerability Assessment
// =========================================

function startScan() {

    let target = document.getElementById("target").value.trim();

    let result = document.getElementById("result");

    if (target === "") {

        result.innerHTML = `
            <h3>Scan Result</h3>
            <p style="color:red;">
                Please enter an IP Address or Website URL.
            </p>
        `;

        return;
    }

    // Simulate scanning

    result.innerHTML = `
        <h3>Scanning Target...</h3>
        <p>Please wait while the scan is running.</p>
    `;

    setTimeout(function () {

        let riskLevel;

        let random = Math.floor(Math.random() * 4);

        if (random === 0) {

            riskLevel = "Low";

        } else if (random === 1) {

            riskLevel = "Medium";

        } else if (random === 2) {

            riskLevel = "High";

        } else {

            riskLevel = "Critical";

        }

        result.innerHTML = `

        <h3>Scan Completed</h3>

        <hr>

        <p><strong>Target:</strong> ${target}</p>

        <p><strong>Status:</strong> Scan Successful</p>

        <p><strong>Risk Level:</strong> ${riskLevel}</p>

        <h4>Open Ports</h4>

        <ul>
            <li>22 - SSH</li>
            <li>80 - HTTP</li>
            <li>443 - HTTPS</li>
        </ul>

        <h4>Detected Vulnerabilities</h4>

        <ul>
            <li>Weak Password Policy</li>
            <li>Missing Security Headers</li>
            <li>Outdated Software Version</li>
        </ul>

        <h4>Recommendations</h4>

        <ul>
            <li>Update all software regularly.</li>
            <li>Enable Multi-Factor Authentication (MFA).</li>
            <li>Use strong passwords.</li>
            <li>Configure the firewall properly.</li>
            <li>Monitor network traffic continuously.</li>
        </ul>

        `;

    }, 2000);

}