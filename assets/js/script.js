let container = $(".container")


//  Creates one time block
// do this 8 times 

const createTimeBlock = () => {
    let timeBlock = $("<div>")
    timeBlock.addClass("row hour")
    timeBlock.css("border", "1pt solid red")
    container.append(timeBlock)
}

for (let i = 0; i < 8; i++){
    createTimeBlock();
}
