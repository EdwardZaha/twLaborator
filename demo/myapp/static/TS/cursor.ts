const cursor = document.createElement("div");
cursor.id = "cursor";
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e: MouseEvent) => {
    cursor.style.left = `${e.clientX}px`; // X coordinate
    cursor.style.top = `${e.clientY}px`;  // Y coordinate
});

let hue = 0;

function animateColor() {
    // Cycle hue from 0 to 360, keeping a vibrant professional blue/indigo tone saturation and lightness
    hue = (hue + 1) % 360;

    cursor.style.backgroundColor = `hsl(${hue}, 83%, 53%)`;
    cursor.style.boxShadow = `15px 15px 15px hsl(${hue}, 83%, 53%)`;

    requestAnimationFrame(animateColor);
}

// Start the animation loop
requestAnimationFrame(animateColor);