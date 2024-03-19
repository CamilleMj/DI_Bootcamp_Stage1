let user = prompt (" Can you enter a number: ");

function singBeerSong(numBottles) {
    for (let i = numBottles; i > 0; i--) {
        console.log(${i} bottle${i !== 1 ? 's' : ''} of beer on the wall);
        console.log(${i} bottle${i !== 1 ? 's' : ''} of beer);
        console.log(Take ${i === 1 ? 'it' : 'one'} down, pass ${i === 1 ? 'it' : 'them'} around);
        console.log(${i - 1 === 0 ? 'No more' : i - 1} bottle${i - 1 !== 1 ? 's' : ''} of beer on the wall\n);
    }
}

singBeerSong(5);