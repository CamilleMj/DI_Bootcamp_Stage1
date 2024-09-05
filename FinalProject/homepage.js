// async function createEvent() {
//     try {
//         const response = await fetch('/events');
//         const events = await response.json();

//         const eventsList = document.getElementById('eventList');
//         eventsList.innerHTML = '';

//         events.forEach(event => {
//             const listItem = document.createElement('li');

//             if (event.image_url) {
//                 const img = document.createElement('img');
//                 img.src = event.image_url;
//                 img.alt = 'Event Image';
//                 img.style.width = '200px';
//                 listItem.appendChild(img);
//             }

//             const text = document.createTextNode(`${event.event_date} - ${event.location}: ${event.description}`);
//             listItem.appendChild(text);

//             eventsList.appendChild(listItem);
//         });
//     } catch (error) {
//         console.error('Error loading events:', error);
//     }
// }

// window.onload = createEvent;

// async function createEvent() {
//     try {
//         const response = await fetch('/events');
//         const events = await response.json();

//         const gallery = document.querySelector('.gallery');
//         gallery.innerHTML = '';

//         events.forEach(event => {
//             const descDiv = document.createElement('div');
//             descDiv.className = 'desc';

//             if (event.image_url) {
//                 const img = document.createElement('img');
//                 img.src = event.image_url;
//                 img.alt = 'Event Image';
//                 descDiv.appendChild(img);
//             }
            
//             const imageDiv = document.createElement('div');
//             const text = document.createElement('p');
//             imageDiv.className = 'hidden';
//             text.textContent = `${event.event_date} - ${event.location}: ${event.description}`;
//             descDiv.appendChild(text);

//             function showStuff() {
//                 let hidden = document.getElementsByClassName('hidden');
//                 if (hidden.style.display == "none") {
//                   hidden.style.display = "block"
//                 } else {
//                   hidden.style.display = "none"
//                 }
//               }

//             gallery.appendChild(descDiv);
//         });
//     } catch (error) {
//         console.error('Error loading events:', error);
//     }
// }

// window.onload = createEvent;

//Function to create an event and it appears on the homepage
async function createEvent() {
    try {
        const response = await fetch('/events');
        const events = await response.json();
        console.log(events);

        const gallery = document.querySelector('.gallery');
        console.log(gallery);
        gallery.innerHTML = '';

        const modal = document.getElementById('myModal');
        const modalImg = document.getElementById('img01');
        const captionText = document.getElementById('caption');
        const span = document.getElementsByClassName('close')[0];

        events.forEach(event => {
            const descDiv = document.createElement('div');
            descDiv.className = 'desc';

            if (event.image_url) {
                const img = document.createElement('img');
                img.src = `${event.image_url}`;
                img.alt = 'Event Image';
                console.log(`Setting image source to: ${img.src}`);
                descDiv.appendChild(img);

                const eventDate = new Date(event.event_date);
                const formattedDate = eventDate.toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: '2-digit',
                    year: '2-digit'
                });
                const formattedTime = eventDate.toLocaleTimeString('en-GB', {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false
                });

                img.onclick = function() {
                    modal.style.display = "flex";
                    modalImg.src = this.src;
                    captionText.innerHTML = `Date: ${formattedDate} - ${formattedTime} - Location : ${event.location} - Category : ${event.category} Description : ${event.description}`;
                }
            }

            gallery.appendChild(descDiv);
        });

        span.onclick = function() { 
            modal.style.display = "none";
        }

    } catch (error) {
        console.error('Error loading events:', error);
    }
}

window.onload = createEvent;

async function loadEvents() {
    try {
        const response = await fetch('/events'); // Ensure this endpoint is correct
        if (!response.ok) throw new Error('Network response was not ok');
        const events = await response.json();

        const gallery = document.querySelector('.gallery');
        gallery.innerHTML = ''; // Clear existing content

        events.forEach(event => {
            const eventElement = document.createElement('div');
            eventElement.classList.add('event');
            eventElement.innerHTML = `
                <h2>${event.title}</h2>
                <p>${event.description}</p>
                <img src="${event.image_url}" alt="${event.title}">
            `;
            gallery.appendChild(eventElement);
        });
    } catch (error) {
        console.error('Error loading events:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadEvents);

//Function to search for a specific event using the form and it appears on the search page
document.querySelector('form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const date = document.getElementById('date1').value;
    const location = document.getElementById('locality1').value.toLowerCase();
    const category = document.querySelector('input[name="category"]').value.toLowerCase();

    try {
        const response = await fetch('/events');
        const events = await response.json();

        const filteredEvents = events.filter(event => {
            const eventDate = event.date;
            const eventLocation = event.location.toLowerCase();
            const eventCategory = event.category.toLowerCase();

            return (!date || eventDate === date) &&
                   (!location || eventLocation.includes(location)) &&
                   (!category || eventCategory.includes(category));
        });

        displayEvents(filteredEvents);

    } catch (error) {
        console.error('Error fetching or filtering events:', error);
    }
});

function displayEvents(events) {
    const resultsContainer = document.querySelector('.results');
    resultsContainer.innerHTML = '';

    if (events.length === 0) {
        resultsContainer.innerHTML = '<p>No matching events found.</p>';
        return;
    }

    events.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.classList.add('event-item');

        const eventDate = new Date(event.event_date);
                const formattedDate = eventDate.toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: '2-digit',
                    year: '2-digit'
                });
                const formattedTime = eventDate.toLocaleTimeString('en-GB', {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false
                });

        eventElement.innerHTML = `
            <p>Date: ${formattedDate}</p>
            <p>Time: ${formattedTime}</p>
            <p>Location: ${event.location}</p>
            <p>Category: ${event.category}</p>
            <p>Description: ${event.description}</p>
            <img src="${event.image_url}" alt="${event.title}" width=550px>
        `;

        resultsContainer.appendChild(eventElement);
    });
}
