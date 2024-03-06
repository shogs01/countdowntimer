// set the date we're counting down to
const countdowndate = new Date().getTime() + (10*24*60*60*1000);

// update the countdown every second 
const countdownElement = document.getElementById("countdown");
const timerInterval = setInterval(updatecountdown, 1000);

function updatecountdown () {
    //get the current date and time
    const now = new Date().getTime();

    // find the distance between now and the countdown date 
    const distance = countdowndate - now;

    // calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000*60*60*24));
    const hours= Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    const minutes = Math.floor(((distance % (1000*60*60))/(1000*60)));
    const seconds = Math.floor(((distance % (1000*60)) / 1000));

    //display the countdown
    countdownElement.innerHTML =   `<h2>${days}d ${hours}h ${minutes}m ${seconds}s</h2>`;
    
    // if the countdown is over, reset it
    if (distance < 0){
        clearInterval(timerIntervel);
        countdownElement.innerHTML = "EXPIRED";
        setTimeout(() => {
            location.reload();
        }, 5000); // reload after 5 seceonds
    }
}