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
    let bmi = getBmi(heigth, weigth);
    bmiE1.innerText = "BMI:" + bmi;
    console.log(bmi);

    if (bmi > 27) {
        commentEl.innerText = '肥胖';
    } else if (bmi <= 27 && bmi > 24) {
        commentEl.innerText = '過重';
    } else if (bmi <= 24 && bmi > 18.5) {
        commentEl.innerText = '健康';
    } else {
        commentEl.innerText = '過輕';
    }

}

function clearForm() {
    userNameEl.value = "";
    heigthEl.value = "";
    weigthEl.value = "";
    bmiE1.innerText = "";
    commentEl.innerText = "";
}

const userNameEl = document.querySelector("#username");
const heigthEl = document.querySelector("#heigth");
const weigthEl = document.querySelector("#weigth");
const bmiE1 = document.querySelector("#bmi");
const commentEl = document.querySelector("#comment");

//console.log(userNameEl, heigthEl, weigthEl);
//console.log(getBmi(heigthEl.value, weigthEl.value));

