let input = document.querySelector("input");
let button = document.querySelector("button");
let iframe = document.querySelector("iframe");
let youtubeUrl = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/(watch\?v=)?([A-Za-z0-9_-]+)$/;


button.addEventListener("click",()=>{
    if(youtubeUrl.test(input.value)){
        let updatedUrl = input.value.replace(/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=/, "https://www.youtube.com/embed/");
        iframe.src = updatedUrl
    }else{
        let h = document.createElement("h2")
        h.textContent = "WRONG"
        h.style.color = "red"   
        document.body.append(h)
    }

})