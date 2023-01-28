const container = $(".container")
const currentDayDisplay = $("#currentDayDisplay")

// Time
const currentDay = moment().format("dddd")
const currentHour = moment().format("H")
console.log(currentHour)

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
    let timeBlock = $("<div>")
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

let hourStart = 9;

for (let i = 0; i < 8; i++){
    let newRow = createRow()
    container.append(newRow)
    

}

console.log($(".hour"));

$(".hour").each( function (index){
    $(this).text(hourStart)
    hourStart++
})