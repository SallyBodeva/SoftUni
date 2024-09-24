function coneAreaAndVolume(r,h) {
    let area = Math.PI * r * Math.sqrt(r*r + h*h) + Math.PI*r*r;
    let volume = (Math.PI * r * r * h) / 3;

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}