async function checker(){
    let text=document.getElementsByTagName("textarea")[0].value;
    let result=document.getElementById("resultplace");
    let source=await fetch("https://sentim-api.herokuapp.com/api/v1/",{
    method: "POST",
    headers: {
        Accept: "application/json", 
        "Content-Type": "application/json"
    },
    body: JSON.stringify({"text": `${text}`}),
})
if(source.status>400){
    result.innerHTML="";
    result.textContent="It's an error";
}
else{
result.innerHTML=`Rate: <div id="rate"></div>Text emotion is: <div id="emotion"></div>`;
let solution=await source.json();
let rate=document.getElementById("rate");
let emotion=document.getElementById("emotion");
rate.innerHTML=solution.result.polarity;
emotion.innerHTML=solution.result.type;
if(solution.result.polarity>0){
    rate.style.color="green";
    emotion.style.color="green";
}
else if(solution.result.polarity<0){
    rate.style.color="red";
    emotion.style.color="red";
}
}

}
let active=document.getElementsByTagName("button")[0];
active.addEventListener("click",checker);