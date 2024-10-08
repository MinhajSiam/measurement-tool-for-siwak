document.getElementById("compact-calculate-size").addEventListener("click", function () {
    // Get user inputs for height (feet and inches) and weight
    const feet = parseFloat(document.getElementById("compact-feet").value);
    const inches = parseFloat(document.getElementById("compact-inches").value);
    const weight = parseFloat(document.getElementById("compact-weight").value);

    // Calculate total height in inches
    const totalHeightInInches = (feet * 12) + inches;

    // Determine size based on given measurements
    let size = "N/A";

    // Size S: Height 59 to 64 inches, Weight 43 to 52 kg
    if (totalHeightInInches >= 59 && totalHeightInInches <= 64 && weight >= 43 && weight <= 52) {
        size = "S";
    }
    // Size M: Height 62 to 67 inches, Weight 52 to 61 kg
    else if (totalHeightInInches >= 62 && totalHeightInInches <= 67 && weight >= 52 && weight <= 61) {
        size = "M";
    }
    // Size L: Height 64 to 69 inches, Weight 61 to 70 kg
    else if (totalHeightInInches >= 64 && totalHeightInInches <= 69 && weight >= 61 && weight <= 70) {
        size = "L";
    }
    // Size XL: Height 66 to 71 inches, Weight 68 to 77 kg
    else if (totalHeightInInches >= 66 && totalHeightInInches <= 71 && weight >= 68 && weight <= 77) {
        size = "XL";
    }
    // Size XXL: Height 66 to 76 inches, Weight 75 to 90 kg
    else if (totalHeightInInches >= 66 && totalHeightInInches <= 76 && weight >= 75 && weight <= 90) {
        size = "XXL";
    }
    // Default case for unrecognized sizes
    else {
        size = "There are no available sizes for you"; // For cases outside the defined ranges, default to XXL
    }

    // Display the result
    document.getElementById("compact-result").style.display = "block";
    document.getElementById("compact-size-output").innerText = size;
});
