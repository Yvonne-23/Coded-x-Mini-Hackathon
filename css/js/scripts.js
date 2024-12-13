// Background music control
const music = document.getElementById("background-music");
document.addEventListener("keydown", (e) => {
    if (e.key === "m") {
        music.muted = !music.muted; // Press 'M' to mute/unmute
    }
});

// Planet interaction
const planets = document.querySelectorAll(".planet");
planets.forEach(planet => {
    planet.addEventListener("click", () => {
        const name = planet.getAttribute("data-name");
        alert(`Welcome to ${name}!`);
        // Navigate to the planet's "page" or load its content dynamically
    });
});
