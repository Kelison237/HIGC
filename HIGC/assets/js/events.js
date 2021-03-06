// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
console.log(countDownDate);
// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = `
  <div class="countdown">
    <div class="days time">
        <h2>${days}</h1>
        <p>Days</p>
        </div>
        <div class="hours time">
        <h2>${hours}</h1>
        <p>Hour(s)</p>
        </div>
        <div class="minutes time">
        <h2>${minutes}</h1>
        <p>Minutes</p>
        </div>
        <div class="seconds time">
        <h2>${seconds}</h1>
        <p>Seconds</p>
        </div>

    </div>`

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);