async function checker(){
    let text=document.getElementsByTagName("textarea")[0].value;
    let result=document.getElementById("result-place");
result.innerHTML=`rate: <div id="Rate"></div>Text is: <div id="character"></div>`;
}

let active=document.getElementsByTagName("button")[0];
active.addEventListener("click",checker);