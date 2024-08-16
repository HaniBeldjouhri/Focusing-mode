let input = document.querySelector("input");
let button_IFR = document.querySelector("button");
let button_Alt = document.getElementById("button_Alt");
let iframe = document.querySelector("iframe");
let Alert = document.getElementById("Alert");
let overlay = document.getElementById("overlay");
let youtubeUrl = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/(watch\?v=)?([A-Za-z0-9_-]+)$/;


button_IFR.addEventListener("click",()=>{
    if(youtubeUrl.test(input.value)){
        let updatedUrl = input.value.replace(/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=/, "https://www.youtube.com/embed/");
        iframe.src = updatedUrl
    }else{
        Alert.style.display = "block"
        overlay.style.display = "block"
    }

})
button_Alt.addEventListener("click",()=>{
    Alert.style.display = "none"
    overlay.style.display = "none"

})