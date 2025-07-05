window.addEventListener("deviceorientation", (e) => {
    document.querySelectorAll('.foo').forEach(x => x.style.setProperty('--shadow-direction', `${e.alpha}deg`))
}, true);
