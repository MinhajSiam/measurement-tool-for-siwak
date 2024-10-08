document.getElementById("calculate-size").addEventListener("click", function () {
    // Get user inputs
    const feet = parseInt(document.getElementById("feet").value);
    const inches = parseInt(document.getElementById("inches").value);
    const weight = parseInt(document.getElementById("weight").value);

    // Calculate total height in inches
    const totalHeightInInches = feet * 12 + inches;

    // Determine size based on given measurements
    let size = "N/A";

    if (totalHeightInInches >= 59 && totalHeightInInches <= 64 && weight >= 43 && weight <= 52) {
        size = "S";
    } else if (totalHeightInInches >= 62 && totalHeightInInches <= 67 && weight >= 52 && weight <= 61) {
        size = "M";
    } else if (totalHeightInInches >= 64 && totalHeightInInches <= 69 && weight >= 61 && weight <= 70) {
        size = "L";
    } else if (totalHeightInInches >= 66 && totalHeightInInches <= 71 && weight >= 68 && weight <= 77) {
        size = "XL";
    } else {
        size = "XXL"; // For sizes outside of given reference ranges
    }

    // Display the result
    document.getElementById("result").style.display = "block";
    document.getElementById("size-output").innerText = size;
});
