const digitalClock = document.getElementById("digitalClock");
setInterval(()=>{
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();
    
    const prefix = hour>=12? "PM": "AM";
   
    const format = `${hour}:${minute}:${seconds} ${prefix}`;
    digitalClock.innerText= format;

}
,1000);
