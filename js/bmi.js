function getBmi(heigth, weight) {
    let bmi = weight / (heigth / 100) ** 2;

    if (isNaN(bmi)) {
        return "Value error."
    }

    return bmi.toFixed(2);
}

function calBmi() {
    let heigth = heigthEl.value;
    let weigth = weigthEl.value;

    if (heigth == '' || weigth == '') {
        alert("輸入不能為空");
        return;
    }
    let bmi = getBmi(heigth, heigth);
    console.log(bmi);
}

const userNameEl = document.querySelector("#username");
const heigthEl = document.querySelector("#heigth");
const weigthEl = document.querySelector("#weigth");

console.log(userNameEl, heigthEl, weigthEl);
console.log(getBmi(heigthEl.value, weigthEl.value));

