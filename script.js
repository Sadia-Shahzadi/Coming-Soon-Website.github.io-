  // Set the date and time of the event (Year, Month (0-11), Day, Hour, Minute, Second)

  const eventDate = new Date(2023, 8, 15, 12, 0, 0); // September 15, 2023 at 12:00:00

  function updateCountdown() {
    const now = new Date();
    const timeDifference = eventDate - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / (1000));

    document.querySelector('.days h2').textContent = days < 10 ? `0${days}` : days;
    document.querySelector('.hours h2').textContent = hours < 10 ? `0${hours}` : hours;
    document.querySelector('.minutes h2').textContent = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector('.seconds h2').textContent = seconds < 10 ? `0${seconds}` : seconds;
    
    
}

// Initial call
updateCountdown();

// Update countdown every second

setInterval(updateCountdown, 1000);