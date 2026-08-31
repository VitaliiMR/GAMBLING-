const symbols = ["7", "★", "♦", "♣", "♥", "☘", "🔔", "🍒"];

const main = document.createElement("main");
const heading = document.createElement("h1");
heading.textContent = "LET'S GO GAMBLING";
const field = document.createElement("div");
field.className = "symbol-field";
field.setAttribute("aria-label", "Three random symbols");
const button = document.createElement("button");
button.textContent = "Spin";
button.setAttribute("aria-label", "Spin the slot machine");
for (let index = 0; index < 3; index += 1) {
    const symbol = document.createElement("span");
    symbol.className = "symbol";
    symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    symbol.setAttribute("aria-hidden", "true");
    field.append(symbol);
}
button.addEventListener("click", () => {
    button.disabled = true;
    button.textContent = "Spinning...";
    field.classList.add("is-spinning");
    const reels = Array.from(field.querySelectorAll(".symbol"));
    const spinInterval = window.setInterval(() => {
        reels.forEach((reel) => {
            reel.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        });
    }, 80);
    window.setTimeout(() => {
        window.clearInterval(spinInterval);
        field.classList.remove("is-spinning");
        button.disabled = false;
        button.textContent = "Spin";
    }, 900);
});
main.append(heading, field, button);
document.body.append(main);
