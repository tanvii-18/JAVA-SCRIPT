let interval;

$('#startBtn').click(function () {
  clearInterval(interval);

  let time = parseInt($('.input').val());

  if (isNaN(time) || time <= 0) {
    $('.display').text('Please enter a valid number...');
    return;
  }

  $('.display').text(time + " s");

  interval = setInterval(function () {
    time--;

    if (time >= 0) {
      $('.display').text(time + " s");
    } else {
      clearInterval(interval);
      $('.display').text("Time's up !");
    }
  }, 1000);
});