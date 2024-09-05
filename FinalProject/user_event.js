document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/events');
        const events = await response.json();

        const eventsList = document.getElementById('myModal');
        eventsList.innerHTML = '';

        events.forEach(event => {
            const eventDiv = document.createElement('div');
            eventDiv.className = 'event-item';

            eventDiv.innerHTML = `
                <button class="edit-btn" data-id="${event.id}">Edit</button>
                <button class="delete-btn" data-id="${event.id}">Delete</button>
            `;

            eventsList.appendChild(eventDiv);
        });

        document.querySelectorAll('.edit-btn').forEach(button => {
            button.addEventListener('click', handleEditEvent);
        });

        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', handleDeleteEvent);
        });

    } catch (error) {
        console.error('Error fetching user events:', error);
    }
});

async function handleEditEvent(event) {
    const eventId = event.target.getAttribute('data-id');

    const newDate = prompt('Enter new date (YYYY-MM-DD):');
    const newLocation = prompt('Enter new location:');
    const newCategory = prompt('Enter new category:');
    const newDescription = prompt('Enter new description:');

    const updatedEvent = {
        date: newDate,
        location: newLocation,
        category: newCategory,
        description: newDescription
    };

    try {
        const response = await fetch(`/events/${eventId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedEvent)
        });

        if (response.ok) {
            alert('Event updated successfully');
            window.location.reload();
        } else {
            alert('Failed to update event');
        }
    } catch (error) {
        console.error('Error updating event:', error);
    }
}

async function handleDeleteEvent(event) {
    const eventId = event.target.getAttribute('data-id');
    try {
        const response = await fetch(`/events/${eventId}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            event.target.parentElement.remove();
            alert('Event deleted successfully');
        } else {
            alert('Failed to delete event');
        }
    } catch (error) {
        console.error('Error deleting event:', error);
    }
}