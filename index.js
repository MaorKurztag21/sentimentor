async function checker(){
    let text=document.getElementsByTagName("textarea")[0].value;
    let result=document.getElementById("resultplace");
    let load=document.createElement("img");
    load.id="load";
    result.appendChild(load).src='https://i.gifer.com/80ZN.gif'
    //result.appendChild(document.createElement("img")).src='https://i.gifer.com/80ZN.gif';
    let cat=document.createElement("img");
    // cat.classList.add="cat";
    cat.id="cat"
    cat.style.float ="left"

    
    let source=await fetch("https://sentim-api.herokuapp.com/api/v1/",{
        method: "POST",
        headers: {
            Accept: "application/json", 
            "Content-Type": "application/json"
        },
        body: JSON.stringify({"text": `${text}`}),
    })
    let statusNum=source.status;
    if(statusNum>400){
        result.textContent="It's an error";
        cat.setAttribute("width", "200px");
        cat.setAttribute("height", "200px");
        result.appendChild(cat).src=`https://http.cat/${statusNum}` ; 
    }
    else{
result.innerHTML=`Rate: <div id="rate"></div>Text emotion is: <div id="emotion"></div>`;
cat.setAttribute("width", "200px");
       cat.setAttribute("height", "200px");
result.appendChild(cat).src=`https://http.cat/${statusNum}` ; 
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
