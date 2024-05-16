
function displayGreeting() {
    let date = new Date();
    let hours = date.getHours();
    let greeting = '';

    if (hours < 12) {
        greeting = 'Good Morning';
    } else if (hours >= 12 && hours < 17) {
        greeting = 'Good Afternoon';
    } else {
        greeting = 'Good Evening';
    }

    let datetime = document.getElementById('datetime');
    datetime.textContent = "Current Time and Date: " + date;

    let greetings = document.getElementById('greeting');
    greetings.textContent = greeting;
}


displayGreeting();

setInterval(displayGreeting, 1000);