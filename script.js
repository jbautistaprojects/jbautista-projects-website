const clickGameButton =document.getElementById("clickGameButton");

function moveButton() {
    const buttonPosition1 = clickGameButton.style.left.replace("px","");
    const buttonPosition2 = clickGameButton.style.top.replace("px","");
    const left = parseInt(buttonPosition1, 10);
    const top = parseInt(buttonPosition2, 10);

    clickGameButton.style.left = `${Math.random()*1000}px`;
    clickGameButton.style.top = `${Math.random()*1000}px`;
  
}


document.addEventListener("click", function () {
    moveButton();
})