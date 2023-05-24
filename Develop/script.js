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


  function timeCheckTracker(){
    var currenttime = moment().hours();
    
    $(".description").each(function(){
      var timeCheck =  parseInt($(this).attr("id"));
     //Add code to apply the past, present, or future class to each time 
      if(timeCheck > currenttime){
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
  
      else if(timeCheck < currenttime){
        $(this).removeClass("future");
        $(this).removeClass("presentt");
        $(this).addClass("past");
      }
  
  else{
        $(this).removeClass("future");
        $(this).removeClass("past");
        $(this).addClass("present");
      }
    })
  
  }

  // Add code to get any user input that was saved in localStorage and set
var saveValue = JSON.parse(localStorage.getItem("9AM"));
$("#9AM").val("");
$("#9AM").val(saveValue);

var saveValue = JSON.parse(localStorage.getItem("10AM"));
$("#10AM").val("");
$("#10AM").val(saveValue);

var saveValue = JSON.parse(localStorage.getItem("11AM"));
$("#11AM").val("");
$("#11AM").val(saveValue);

var saveValue = JSON.parse(localStorage.getItem("12PM"));
$("#12PM").val("");
$("#12PM").val(saveValue);

var saveValue = JSON.parse(localStorage.getItem("1PM"));
$("#1PM").val("");
$("#1PM").val(saveValue);

var saveValue = JSON.parse(localStorage.getItem("2PM"));
$("#2PM").val("");
$("#2PM").val(saveValue);

var saveValue = JSON.parse(localStorage.getItem("3PM"));
$("#3PM").val("");
$("#3PM").val(saveValue);

var saveValue = JSON.parse(localStorage.getItem("4PM"));
$("#4PM").val("");
$("#4PM").val(saveValue);

var saveValue = JSON.parse(localStorage.getItem("5PM"));
$("#5PM").val("");
$("#5PM").val(saveValue);

timeCheckTracker();

})



