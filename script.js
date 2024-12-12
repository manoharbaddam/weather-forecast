function displayClock() {
    let d = new Date();
    let hour = String(d.getHours()).padStart(2, '0');
    let minute = String(d.getMinutes()).padStart(2, '0');
    document.getElementById("clock").innerHTML = `${hour}:${minute}`;
}
setInterval(displayClock, 1000);

function displayDate() {
    let d = new Date();
    const days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
    let day = days[d.getDay()];

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[d.getMonth()];
    let date = d.getDate();
    let year = d.getFullYear();
    document.getElementById("date").innerHTML = `${day} ${date}th ${month}, ${year}`;
}
setInterval(displayDate, 1000);
