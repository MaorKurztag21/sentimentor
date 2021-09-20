async function checker(){
    let text=document.getElementsByTagName("textarea").value;
    let result=document.getElementById("result-place");
    let source=await fetch("https://sentim-api.herokuapp.com/api/v1/",{
    method: "POST",
    headers: {
        Accept: "application/json", 
        "Content-Type": "application/json"
    },
    body: JSON.stringify({"text": `${text}`}),
    })
    result.innerHTML=`rate: <div id="Rate"></div>Text is: <div id="character"></div>`;
}

let active=document.getElementsByTagName("button")[0];
active.addEventListener("click",checker);