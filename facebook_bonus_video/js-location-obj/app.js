const urlSpan = document.getElementById("site-url")
const originSpan = document.getElementById("site-origin")
const hostNameSpan = document.getElementById("site-hostname")
const postSpan = document.getElementById("site-port")
const protocolSpan = document.getElementById("site-protocol")
const pathSpan = document.getElementById("site-path")
console.log(location.protocol);
urlSpan.innerText = location.href;
originSpan.innerText = location.origin;
hostNameSpan.innerText = location.hostname;
postSpan.innerText = location.port;
protocolSpan.innerText = location.protocol;
pathSpan.innerText = location.pathname;

function locationReload(){
    location.reload();
}
function replaceLocation(){
    // Back e jawa jabe na
    location.replace('http://127.0.0.1:5500/facebook_bonus_video/js-location-obj/blog.html');
}

function assignLocation(){
    // to solve this use location.assign
    location.assign('http://127.0.0.1:5500/facebook_bonus_video/js-location-obj/blog.html');
}


