

// 1. CurrentDay
var currentDayEl = $('#currentDay');

function displayTime() {
    var rightNow = moment().format('dddd MMM DD, YYYY [at] h:mm:ss a');
    currentDayEl.text(rightNow);
}

displayTime();
// 2. Time blocks for standard business hours show on the schedule
    hourEl.attr('class','hour')
    timeBlockEl.attr('class','timeBlock')
    descriptionEl.attr('class','description')
// 3. Color indicates whether in the past, present, or future
    pastEl.attr('class','past')
    presentEl.attr('class','present')
    futureEl.attr('class','future')
// 4. Enter an event function into a time block
    textareaEl.text('class','textarea')
// 5. Data saved in local storage
    saveBtnEl.attr('class','saveBtn')


// 6. Saved events persist after refreshing the page


  // set new submission to local storage 
 
  var submission = $('description');

  var description = function (event) {
    event.preventDefault();
  
    var submission = descriptionEl.val();
  
    printDescription(submission);
  }