// Distance Conversion Logic
function convertDistance() {
    const distance = parseFloat(document.getElementById("distance-input").value);
    const unit = document.getElementById("distance-unit").value;
    let meters, feet, inches;

    if (isNaN(distance)) {
        document.getElementById("distance-output").innerText = "Please enter a valid distance.";
        return;
    }

    // Convert input to meters
    switch (unit) {
        case 'meters':
            meters = distance;
            feet = meters * 3.28084;
            inches = meters * 39.3701;
            break;
        case 'feet':
            feet = distance;
            meters = feet / 3.28084;
            inches = feet * 12;
            break;
        case 'inches':
            inches = distance;
            meters = inches / 39.3701;
            feet = inches / 12;
            break;
    }

    // Output converted distances
    document.getElementById("distance-output").innerText = 
        `${meters.toFixed(2)} meters = ${feet.toFixed(2)} feet = ${inches.toFixed(2)} inches`;
}

// Speed Conversion Logic
function convertSpeed() {
    const speed = parseFloat(document.getElementById("speed-input").value);
    const unit = document.getElementById("speed-unit").value;
    let kmph, mph, mps;

    if (isNaN(speed)) {
        document.getElementById("speed-output").innerText = "Please enter a valid speed.";
        return;
    }

    // Convert input to km/h
    switch (unit) {
        case 'kmph':
            kmph = speed;
            mph = kmph * 0.621371;
            mps = kmph / 3.6;
            break;
        case 'mph':
            mph = speed;
            kmph = mph / 0.621371;
            mps = kmph / 3.6;
            break;
        case 'mps':
            mps = speed;
            kmph = mps * 3.6;
            mph = kmph * 0.621371;
            break;
    }

    // Output converted speeds
    document.getElementById("speed-output").innerText = 
        `${kmph.toFixed(2)} km/h = ${mph.toFixed(2)} mph = ${mps.toFixed(2)} m/s`;
}
