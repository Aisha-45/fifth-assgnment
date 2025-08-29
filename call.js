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


// call list

const callButton =document.querySelectorAll(".calling-button")
const coinDiv =document.getElementById("coin")
const callHistory =document.getElementById("recorder-card")
const clearBtn =document.getElementById("clear-button")

callButton.forEach (button=>{
    button.addEventListener("click",() => {
        
        let coins =parseInt(coinDiv.textContent);
        if (coins >= 20){
            coins-=20;
            coinDiv.textContent=coins;
            alert("calling...")
            const time=new Date();
            const timeString= time.toLocaleTimeString();
            const newCallDiv=document.createElement('div');
            const card =button.closest(".card")
            const title= card.querySelector(".card-name").innerText;
            const Number=card.querySelector(".card-num").innerText;

            newCallDiv.className = "bg-[#eeebeb] m-3 p-2 justify-between rounded-sm mb-2";
            newCallDiv.innerHTML=`
            <div> 
             <div> 
                <h3 class="font-bold">${title}</h3> 
                <p class="text-gray-400">${Number}</p> 
             </div>
             <div> 
                <p>${timeString}</p> 
             </div> 
            </div>`;
            callHistory.appendChild(newCallDiv);
        }
        else{
            alert("Not enough coins 😔!!")
        }
    })
})

// clear button

clearBtn.addEventListener("click",() =>{
    callHistory.innerHTML="";
});
