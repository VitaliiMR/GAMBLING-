const symbols = ["7", "★", "♦", "♣", "♥", "☘", "🔔", "🍒"];

function evaluateSpin(reels) {
    const [first, second, third] = reels;

    if (first === second && second === third) {
        return {
            result: "jackpot",
            message: "Jackpot! Three matching symbols!"
        };
    }

    if (first === second || first === third || second === third) {
        return {
            result: "small-win",
            message: "Two of a kind! You win a small prize."
        };
    }

    return {
        result: "loss",
        message: "No match. Try again!"
    };
}

if (typeof document !== "undefined") {
    const main = document.createElement("main");
    const heading = document.createElement("h1");
    heading.textContent = "LET'S GO GAMBLING";
    const field = document.createElement("div");
    field.className = "symbol-field";
    field.setAttribute("aria-label", "Three random symbols");
    const result = document.createElement("p");
    result.className = "result";
    result.setAttribute("aria-live", "polite");
    result.textContent = "Ready to spin?";
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

            const finalSpin = reels.map((reel) => reel.textContent);
            const outcome = evaluateSpin(finalSpin);
            result.textContent = outcome.message;
            result.classList.remove("jackpot", "small-win", "loss");
            result.classList.add(outcome.result);

            button.disabled = false;
            button.textContent = "Spin";
        }, 900);
    });

    main.append(heading, field, result, button);
    document.body.append(main);
}

if (typeof module !== "undefined") {
    module.exports = { symbols, evaluateSpin };
}
