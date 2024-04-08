function paint(color) {
    const circle = document.getElementById('circleID');
    circle.style.backgroundColor = color;
}

function randomColor() {
    const colors = ['red', 'green', 'yellow']; // Add more colors if needed
    return colors[Math.floor(Math.random() * colors.length)];
}
