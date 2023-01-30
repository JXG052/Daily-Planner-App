const container = $(".container")
const currentDayDisplay = $("#currentDayDisplay")

// Time
const myMoment = moment()
const date = myMoment.format("MMMM Do YYYY")
const currentDay = myMoment.format("dddd")
const currentHour = myMoment.format("H")
// const currentHour = 11
// let currentHour = 11;
currentDayDisplay.text(`${currentDay}, ${date}`)

// Local Storage
let loadedObj = JSON.parse(localStorage.getItem(date))

// Functions
// creates row
const createRow = () => {
    let row = $("<div>")
    row.addClass("row")
    createHour(row)
    createEvent(row)
    createSaveBtn(row)
    return row
}

//  Creates one time block
// do this 8 times 

const createEvent = (appendTo) => {
    let timeBlock = $("<input>")
    timeBlock.attr("type", "text")
    timeBlock.addClass("time-block col-10 textArea")
    appendTo.append(timeBlock)
}

const createHour = (appendTo) => {
    let hour = $("<div>")
    hour.addClass("hour col-1 text-center justify-center align-center")
    appendTo.append(hour)
}
const createSaveBtn = (appendTo) => {
    let saveBtn = $("<button><i class='fas fa-save'></i></button>");
    saveBtn.addClass("saveBtn col-1")
    
    appendTo.append(saveBtn)
}

// add each row to container
// numbers hard coded for now but could be made dynamic based on user input
let hourStart = 9
for (let i = 0; i < 8; i++){
    let newRow = createRow()
    container.append(newRow)
}

// populate the time column
$(".hour").each( function (){
    let time = myMoment.hour(hourStart).minute("0").second("0").format("H:mm");
    let timeBlock = $(this).next();
    $(this).text(time)
    timeBlock.attr("data-time", time)
    timeBlock.attr("id", time)
    let timeNum = parseInt(time)
    

    // logic for past present 
    if (timeNum == currentHour){
        timeBlock.addClass("present")
    }
    else if (timeNum > currentHour){
        timeBlock.addClass("future")
    }
    else {
        timeBlock.addClass("past")
    }
    hourStart++
    
})

// sets previously saved appointments to the display
function displaySavedAppointments(){
    
    if (loadedObj === null){
        console.log("nothing saved")
        loadedObj = {}
        return;
    }
    
    else {    
        // what to do with the object
        // for each property populate the corresponding id with the value
        let loadedKeys = Object.keys(loadedObj);
        loadedKeys.forEach( (key) => {
            let el = document.getElementById(key);
            el.value = loadedObj[key];
        })
    }
}

// Update local Storage on clicking save
$('.container').on('click', '.saveBtn', function(event){ 
    event.preventDefault()
    let hourKey = $(this).prev().prev().text()
    let value = $(this).prev().val()
    loadedObj[hourKey] = value
    localStorage.setItem(date, JSON.stringify(loadedObj))
})

// Update Local Storage on pressing enter
$('.container').on('keyup', '.time-block', function(event){
 event.preventDefault()
 // if enter is pressed
if (event.keyCode === 13){
    let hourKey = $(this).prev().text()
    let value = $(this).val()
    loadedObj[hourKey] = value
    localStorage.setItem(date, JSON.stringify(loadedObj))
}
})

$(function(){
    // Get values from Local storage
    displaySavedAppointments();
   
})


        











