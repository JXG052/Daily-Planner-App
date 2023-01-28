const container = $(".container")
const currentDayDisplay = $("#currentDayDisplay")

// Time
const currentDay = moment().format("dddd")

currentDayDisplay.text(currentDay)

console.log(currentDay)

// create row
const createRow = () => {
    let row = $("<div>")
    row.addClass("row")
    row.css("border", "3pt solid orange")
    createHour(row)
    createTimeBlock(row)
    createSaveBtn(row)
    return row
}

//  Creates one time block
// do this 8 times 

const createTimeBlock = (appendTo) => {
    let timeBlock = $("<div>")
    timeBlock.addClass("hour time-block col-10")
    timeBlock.css("border", "1pt solid red")
    appendTo.append(timeBlock)
}

const createHour = (appendTo) => {
    let hour = $("<div>")
    hour.addClass("hour col-1")
    hour.css("border", "3pt solid blue")
    appendTo.append(hour)
}
const createSaveBtn = (appendTo) => {
    let saveBtn = $("<button>");
    saveBtn.addClass("saveBtn col-1")
    saveBtn.css("border", "1pt solid green")
    appendTo.append(saveBtn)
}

// for (let i = 0; i < 8; i++){
//     container.append();
// }

let newRow = createRow()
container.append(newRow)