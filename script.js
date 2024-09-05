const leftBtn = document.getElementById(`leftBtn`);
const rightBtn = document.getElementById(`rightBtn`);
const leftBtn2 = document.getElementById(`leftBtn2`);
const rightBtn2 = document.getElementById(`rightBtn2`);

leftBtn.addEventListener(`click`, () => {
    document.addEventListener(`keydown`, mouseDown);
    document.addEventListener(`keyup`, mouseUp);
    leftBtn.disabled = true;
    rightBtn.disabled = false;
})
rightBtn.addEventListener(`click`, () => {
    document.removeEventListener(`mousedown`, mouseDown);
    document.removeEventListener(`mouseup`, mouseUp);
    leftBtn2.innerText = ``;
    rightBtn2.innerText = ``;
    rightBtn.disabled = true;
    leftBtn.disabled = false;
})

function mouseDown(e) {
    leftBtn2.innerText = `${e.key} is Pressed`;
    rightBtn2.innerText = `Pressed a button`;
}

function mouseUp(e) {
    leftBtn2.innerText = `${e.key} is Released`;
    rightBtn2.innerText = `Press a button`;
}