const container = $(".container")
const currentDayDisplay = $("#currentDayDisplay")

// Time
let myMoment = moment()
const currentDay = myMoment.format("dddd")
const currentHour = myMoment.format("H")

currentDayDisplay.text(currentDay)

// create row
const createRow = () => {
    let row = $("<div>")
    row.addClass("row")
    row.css("border", "3pt solid orange")
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
    timeBlock.addClass("time-block col-10")
    timeBlock.css("border", "1pt solid red")
    appendTo.append(timeBlock)
}

const createHour = (appendTo) => {
    let hour = $("<div>")
    hour.addClass("hour col-1 text-center justify-center align-center")
    hour.css("border", "3pt solid blue")
    appendTo.append(hour)
}
const createSaveBtn = (appendTo) => {
    let saveBtn = $("<button>");
    saveBtn.addClass("saveBtn col-1")
    saveBtn.css("border", "1pt solid green")
    appendTo.append(saveBtn)
}

let hourStart = 9
// let dayStart = myMoment.hour(hourStart).minute("0").second("0").format("h:mm");

// console.log(dayStart);
for (let i = 0; i < 8; i++){
    let newRow = createRow()
    container.append(newRow)
}

// populate the time column
$(".hour").each( function (){
    let time = myMoment.hour(hourStart).minute("0").second("0").format("h:mm");
    $(this).text(time)
    $(this).next().attr("data-time", time)
    $(this).next().attr("id", time)
    hourStart++
})

// Add Event Listener for each Timeblock
// that allows an input field to then save in local storage 

// Press Enter to save timeBlock
$('.container').on('keyup', '.time-block', function(event){
    event.preventDefault()
    if (event.keyCode === 13) {
        let hourKey = $(this).prev().text()

        localStorage.setItem(hourKey, $(this).val())
        
    }  
})

// Save Button Event
$('.container').on('click', '.saveBtn', function(event){ 
        event.preventDefault()
        let hourKey = $(this).prev().prev().text()
        localStorage.setItem(hourKey, $(this).prev().val())
        // add reference to key

})




// check each time block for local storage
for (let i = 0; i < localStorage.length; i++){
    let hourKey = localStorage.key(i)
    let value = localStorage.getItem(hourKey);
    let element = document.getElementById(hourKey)    
    element.value = value
}
 




