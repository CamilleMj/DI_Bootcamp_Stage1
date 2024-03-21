document.getElementById('libform').addEventListener('submit', function(event) {
event.preventDefault();

    const nounValue = document.getElementById('noun').value;
    const adjectiveValue = document.getElementById('adjective').value;
    const personValue = document.getElementById('person').value;
    const verbValue = document.getElementById('verb').value;
    const placeValue = document.getElementById('place').value;

    const story = `Once upon a time, in a ${adjectiveValue} land, there lived a brave ${nounValue} named ${personValue}. ${personValue} was known for their daring ${verbValue} adventures across ${placeValue}.`;

    document.getElementById('story').textContent = story;
});
