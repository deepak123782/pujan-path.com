// JavaScript code
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const samanOption = form.querySelector("select[name='saman']");
  const pujanType = form.querySelector("select[name='pujan']");
  const messageBox = document.createElement("div");

  messageBox.style.marginTop = "10px";
  messageBox.style.fontWeight = "bold";
  form.appendChild(messageBox);

  // यदि saman वाला select tag में 'name' नहीं है तो जोड़ लें
  // और pujanType वाले select में भी 'name'="pujan" जोड़ें

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const pujan = pujanType.value;
    const saman = samanOption.value;

    let charges = {
      "Bhagwat Katha": [5100, 3500],
      "Ram Katha": [5000, 3300],
      "Shiv Puran": [4500, 3000],
      "Narmada Puran": [4000, 2800],
      "Devi Bhagwat": [4800, 3200],
      "Satyanarayan Katha": [2500, 1500],
      "Grih Pravesh": [3000, 1800],
      "Shradh / Pind Daan": [2200, 1200]
    };

    let costText = "Pujan Charge: ";
    if (charges[pujan]) {
      costText += saman === "with"
        ? `₹${charges[pujan][0]} (सामान सहित)`
        : `₹${charges[pujan][1]} (बिना सामान)`;
    } else {
      costText += saman === "with" ? "₹3500 (अनुमानित)" : "₹2000 (अनुमानित)";
    }

    alert("आपका बुकिंग फॉर्म सफलतापूर्वक सबमिट हो गया है!\n\n" + costText);
    messageBox.textContent = costText;
    messageBox.style.color = "#b03a2e";
  });
})