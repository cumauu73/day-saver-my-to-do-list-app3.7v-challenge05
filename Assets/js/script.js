// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// console.log("hello cuma") worked
// the code isn't run until the browser has finished rendering all the elements
// in the html.






//button click event when click show message saved  to local storage 1 seconds




$(function () {

  
  // TODO: Add a listener for click events on the save button. This code should
  $(".saveBtn").click(function() {
    $(".local-message").css("display", "flex");
  
    setTimeout(function() {
      $(".local-message").css("display", "none");


      var toDoStorage= localStorage.setItem()
      $(".saveBtn").on("click", deserializedClickListener);
    }, 1000);

  });
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current day and time
  $(document).ready(function() {
    function updateTime() {
      var currentTime = dayjs().format('h:mm A');
      $('#currentTime').text('Time: ' + currentTime); 
      // Add the label "Time:" before the time value
    }
  
    function updateDate() {
      var currentDate = dayjs().format('dddd, MMMM D');
      $('#currentDay').text('Date: ' + currentDate); 
      // Add the label "Date:" before the date value
    }
    
    updateTime();
    updateDate();
  
    setInterval(updateTime, 1000); // Update time every second
    setInterval(updateDate, 86400000); // Update date every day (24 hours)
  });
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
