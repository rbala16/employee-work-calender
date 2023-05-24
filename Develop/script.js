//Add code to display the current date in the header of the page.
var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));
//Add code to display the current day .
var dayWeek = today.format('dddd');
$('#currentDayoftheWeek').text(dayWeek);

$(document).ready(function () {
  //Add a listener for click events on the save button.
  $(".saveBtn").on("click",function(){
    //input values in textarea
    var getTextValue = $(this).siblings(".description").val();;
    var getTimeValue =$(this).siblings(".hour").text();

    localStorage.setItem(getTimeValue,JSON.stringify(getTextValue));
  })


  
