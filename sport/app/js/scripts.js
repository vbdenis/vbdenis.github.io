var timer;

var compareDate = new Date();
compareDate.setDate(compareDate.getDate() + 37); //just for this demo today + 7 days

timer = setInterval(function() {
  timeBetweenDates(compareDate);
}, 1000);

function timeBetweenDates(toDate) {
  var dateEntered = toDate;
  var now = new Date();
  var difference = dateEntered.getTime() - now.getTime();

  if (difference <= 0) {

    // Timer done
    clearInterval(timer);
  
  } else {
    
    var seconds = Math.floor(difference / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    $("#days").text(days);
    $("#hours").text(hours);
    $("#minutes").text(minutes);
    $("#seconds").text(seconds);
  }
}

/*mobile-menu*/
$(document).ready(function(){
  $(".menu-button").click(function(){
    $(this).toggleClass("open");
    $(".mobile-nav").toggleClass("open"); 
  });

// parall
  var counter = 0;
    $('body').on('mousewheel', function(e){        
        if(e.originalEvent.wheelDelta > 0) {
          counter++;
          if(counter > 10) {
            counter = 10;
          }
          $('.parall').css({'top': (100+(counter*15))+'px'});
          $('.bg-parall').css({'background-position-y': (0+(counter*10))+'px'});
        }
        else {
          counter--;
          if(counter < -10) {
            counter = -10;
          }
          $('.parall').css({'top': (100+(counter*15))+'px'});
          $('.bg-parall').css({'background-position-y': (0+(counter*10))+'px'});
        }
    });  
});