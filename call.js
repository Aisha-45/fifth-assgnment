// heart botton

let heartCount =0;
const mainHeart = document.getElementById("heartMain");
const hearts = document.querySelectorAll(".heart");

hearts.forEach( heart => {
    heart.addEventListener("click",function(){
    heartCount++;
    mainHeart.textContent = heartCount;
});
});


// copy button

let copyCounter=0;
const copyCounts=document.querySelector(".copyCount");
const cardButton =document.querySelectorAll(".copyButton");
const cardText =document.querySelectorAll(".copyText")

cardButton.forEach((button, index) => {
    button.addEventListener("click",function(){
        const textCopy =cardText[index].textContent;

        navigator.clipboard.writeText(textCopy)
        .then(() => {
            copyCounter++;
            copyCounts.textContent = copyCounter;
            alert("Number successfully copied 😉!")
        });
    });
});
