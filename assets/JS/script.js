
var currentHour= new Date().getHours()
console.log(currentHour);

// 1. CurrentDay
var currentDayEl = $('#currentDay');

function displayTime() {
    var rightNow = moment().format('dddd MMM DD, YYYY [at] h:mm:ss a');
    currentDayEl.text(rightNow);
}

displayTime();


// 2. Time blocks for standard business hours show on the schedule
var timeBlock=document.getElementById('container')

 for (i=7; i<19 ;i++){
    var time;
    if (currentHour<i) {
        time='future'
    } else if (currentHour===i){
        time="present" 
        
    } else  {
        time='past'
    }
       
    var row=document.createElement('div')
    var hour=document.createElement('p')
    var textarea=document.createElement('textarea')
    var saveBtn=document.createElement('button')
    row.setAttribute('class','row '+ time)
    hour.setAttribute('class','hour col-1')
    textarea.setAttribute('class','description col-10')
    saveBtn.setAttribute('class','saveBtn col-1')
    hour.textContent=i;
    row.append(hour);
    row.append(textarea);
    row.append(saveBtn);
    timeBlock.append(row);
}




// 3. Color indicates whether in the past, present, or future



// 4. Enter an event function into a time block
// textareaEl.text('class', 'textarea')

// document.addEventListener('description', function () {

//     var displayTime = new Date().getHours();
//     if (displayTime >= past && displayTime < 0) {

//         document.present();
//     } else if (displayTime >= future && displayTime < 0) {
//         document.future();
//     } else if (displayTime >= present && displayTime < 0) {
//         document.past();
//     }

// });
// // 5. Data saved in local storage
// saveBtnEl.attr('class', 'saveBtn')


// // 6. Saved events persist after refreshing the page

// localStorage.description
// console.log(localStorage.description);

// // set new submission to local storage 

// var submission = $('description');

// var description = function (event) {
//     event.preventDefault();

//     var submission = descriptionEl.val();

//     printDescription(submission);
// }