const toggleButton = document.getElementById("toggle-button");
const sections = document.querySelectorAll(".info-section");

let hoverDisabled = false;

toggleButton.addEventListener("click", () => {
    hoverDisabled = !hoverDisabled;

    sections.forEach(section => {
        section.classList.toggle("always-show", hoverDisabled);
    });

    if (hoverDisabled) toggleButton.textContent = "Enable hover mode";
    else toggleButton.textContent = "Disable hover mode";
});