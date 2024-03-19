function createCalendar(year, month) {

    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const calendarContainer = document.getElementById('calendarContainer');

    const firstDayOfMonth = new Date(year, month - 1, 1);
    const lastDayOfMonth = new Date(year, month, 0);
    const numDaysInMonth = lastDayOfMonth.getDate();

    const table = document.createElement('table');

    const headerRow = document.createElement('tr');
    for (let weekday of weekdays) {
        const th = document.createElement('th');
        th.textContent = weekday;
        headerRow.appendChild(th);
    }
    table.appendChild(headerRow);

    let date = new Date(firstDayOfMonth);
    while (date.getDay() !== 1) {
        date.setDate(date.getDate() - 1);
    }

    while (date <= lastDayOfMonth) {
        if (date.getDay() === 1) {
            const weekRow = document.createElement('tr');
            table.appendChild(weekRow);
        }
        const dayCell = document.createElement('td');
        dayCell.textContent = date.getDate();
        table.lastElementChild.appendChild(dayCell);
        date.setDate(date.getDate() + 1);
    }

    calendarContainer.appendChild(table);
}

createCalendar(2024, 3);