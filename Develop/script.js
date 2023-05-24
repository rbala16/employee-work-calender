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
