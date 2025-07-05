// document.querySelector('html').addEventListener('mousemove', e => {
//     const mouseCoords = [e.clientX, e.clientY]
//     const centerCoords = [window.innerWidth / 2, window.innerHeight / 2]
//
//
//     const angle = (Math.atan2( mouseCoords[1] - centerCoords[1], mouseCoords[0] - centerCoords[0])  * 180) / Math.PI
//     const norm = (450 + angle) % 360
//
//     document.querySelectorAll('.foo').forEach(x => x.style.setProperty('--shadow-direction', angle + 'deg'))
//
// })


window.addEventListener("deviceorientation", (e) => {
    document.querySelectorAll('.foo').forEach(x => x.style.setProperty('--shadow-direction', e.alpha + 'deg'))
}, true);
