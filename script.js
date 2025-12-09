//your JS code here. If required.
const circles = document.querySelectorAll(".circle");
const progressLine = document.getElementById("progress-line");

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentActive = 1;

// NEXT BUTTON
nextBtn.addEventListener("click", () => {
    currentActive++;

    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    updateProgress();
});

// PREVIOUS BUTTON
prevBtn.addEventListener("click", () => {
    currentActive--;

    if (currentActive < 1) {
        currentActive = 1;
    }

    updateProgress();
});

// UPDATE UI
function updateProgress() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });

    // Progress Line Width
    progressLine.style.width =
        ((currentActive - 1) / (circles.length - 1)) * 100 + "%";

    // Button states
    prevBtn.disabled = currentActive === 1;
    nextBtn.disabled = currentActive === circles.length;
}
