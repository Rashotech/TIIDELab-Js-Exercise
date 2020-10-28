
loadVideo("aa")
videoContent = document.getElementById("video")
async function loadVideo(src) {
    var x = document.createElement("VIDEO");
    try {
    x.setAttribute("src",src);
    x.setAttribute("width", "320");
    x.setAttribute("height", "240");
    x.setAttribute("controls", "controls");
    videoContent.appendChild(x);
    await x.autoplay
    // vid.onloadstart = function() {
    // }; 
    } catch(error){
        alert("Video cannot play now!")
    }
}