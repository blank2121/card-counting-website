function $(element) {
    return document.querySelectorAll(element);
}

card_data= {
    "two": 1,
    "three": 1,
    "four": 1,
    "five": 1,
    "six": 1,
    "seven": 0,
    "eight": 0,
    "nine": 0,
    "ten": -1,
    "jack": -1,
    "queen": -1,
    "king": -1,
    "ace": -1
}

//calulation functions

// cards is 1 because we will multiply the number of decks by 52 and
// it will accurately represent the number of cards

cards=52
$("#num-decks")[0].addEventListener("change", (e)=>{
    cards=parseInt($("#num-decks")[0].value)*52
    if ($("#num-decks")[0].value == "") {
        cards = 52
    }
    trueCountNumber = 0
    console.log(cards)
})

const runningCount = () => {
    count = 0
    card_keys = Object.keys(card_data)
    for(let i = 0; i < card_keys.length; i++) {
        if($(`#${card_keys[i]}`)[0].value == '') {
            count+=0
        }
        else {
            count+=(parseInt(($(`#${card_keys[i]}`)[0].value)) * card_data[card_keys[i]])
        }
    }
    return count
}
trueCountNumber = 0
const trueCount = () => {
    // returns the count
    
    trueCountNumber=(trueCountNumber+runningCount()/(Math.ceil(cards/52)))
    return trueCountNumber;
}

// event listeners

//update the cards count button
$(".update")[0].addEventListener('click', function(){
    // active count
    for(let i = 0; i<13; i++) {
        if ($(`#${Object.keys(card_data)[i]}`)[0].value == '') {
            cards-=0
        }
        else {
            cards -= parseInt($(`#${Object.keys(card_data)[i]}`)[0].value)
        }
    }

    $(`#cards-left`)[0].textContent = cards
    $("#true-count")[0].textContent = trueCount()
    $("#active-count")[0].textContent = runningCount()

    for(let i = 0; i < 13; i++) {
        $(`#${Object.keys(card_data)[i]}`)[0].value = ''
    }

    console.log(cards)
})

let hoveringElement
document.addEventListener("mousemove", (e)=>{
    hoveringElement = document.elementFromPoint(e.clientX, e.clientY)
})
document.addEventListener("keydown", function(e) {
    
    if(e.key == "+" || e.key == "=") {
        if(hoveringElement.value == "") {
            hoveringElement.value = 1
        }
        else {
            hoveringElement.value = parseInt(hoveringElement.value)+1
        }
    }
    if(e.key == "-" || e.key == "_") {
        if(hoveringElement.value == 1 || hoveringElement.value == 0) {
            hoveringElement.value = ""
        }
        else {
            hoveringElement.value = parseInt(hoveringElement.value)-1
        }
    }
})