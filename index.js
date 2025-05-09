let display = document.getElementById("textContent");
let gues = document.getElementById("textBox");
let buttonSub = document.getElementById("buttonSub");
let buttonSetting = document.getElementById("buttonSetting");
let minInput = document.getElementById("min");
let maxInput = document.getElementById("max");
let min = 0, max = 0;
let randomNum = 0, attempts = 0;


// Test input
function testInput() {
    min = Number(minInput.value);
    max = Number(maxInput.value);
    if (min >= max) {
        window.alert("Max mesti lebih besar daripada Min!");
        minInput.value = ``;
        maxInput.value = ``;
        return;
    }
    buttonSub.disabled = false;
    display.textContent = 0;
    gues.value = ``;
    document.querySelector(".dropDown").style.display = "none";
    document.querySelector(".input").style.display = "block";
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
}
// Enter key
gues.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        buttonSub.click();
    }
});

// Submit button
buttonSub.onclick = function() {
    let guessedNumber = Number(gues.value);
    gues.value = ``;

    if (isNaN(guessedNumber) || gues == "") {
        display.textContent = "Sila masukkan nombor!";
        return;
    } else if (min == 0 && max == 0) {
        display.textContent = "Sila masukkan min dan max di setting!";
        return;
    } else if (guessedNumber < min || guessedNumber > max) {
        display.textContent = `Sila masukkan nombor antara ${min} - ${max}`;
        return;
    }

    attempts++;
    if (guessedNumber > randomNum) {
        display.textContent = "Tinggi! Cuba lagi.";
    } else if (guessedNumber < randomNum) {
        display.textContent = "Rendah! Cuba lagi.";
    } else {
        buttonSub.disabled = true;
        display.textContent = `Betul! Anda meneka dalam ${attempts} percubaan.`;
        attempts = 0;
        randomNum = 0;
        setTimeout(() => {
            document.querySelector(".input").style.display = "none";
            document.querySelector(".dropDown").style.display = "block";
        }, 3000);
        
    }
}
