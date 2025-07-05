window.addEventListener("deviceorientation", (e) => {
    document.querySelectorAll('.shadowContainer').forEach(x => x.style.setProperty('--shadow-direction', `${e.alpha}deg`))
}, true);
