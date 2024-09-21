function solve(band, album, song) {
    let durationOfTheSong = (album.length * band.length) * song.length / 2;
    let rotation = Math.ceil(durationOfTheSong / 2.5);

    console.log(`The plate was rotated ${rotation} times.`);
}

solve('Rammstein', 'Sehnsucht', 'Engel');