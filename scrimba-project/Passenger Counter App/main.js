let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

// intialize the count as 0
let count = 0;

// listen for clicks on the increment button
function increment() {
    // increment the count variable when the button is clicked
    count += 1;

    // change the count-el in the HTML to reflect the new count
    countEl.textContent = count;
}

function save(){
    PreviousEntires = count + " - ";
    saveEl.textContent += PreviousEntires;
    console.log(count);
    countEl.textContent = 0
    count = 0;
}


