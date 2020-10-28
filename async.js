
loadVideo("https://zaracarefoundation.com/wp-content/uploads/2020/10/y2mate.com-Master-KG-Jerusalema-Remix-Feat.-Burna-Boy-and-Nomcebo-Official-Music-Video_360p.mp4")
videoContent = document.getElementById("video")
async function loadVideo(src) {
    var x = document.createElement("VIDEO");
    try {
    x.setAttribute("src",src);
    x.setAttribute("width", "640");
    x.setAttribute("height", "500");
    x.setAttribute("controls", "controls");
    await x.play()
    videoContent.appendChild(x);
    // vid.onloadstart = function() {
    // }; 
    } catch(error){
        alert("Video cannot play now!")
    }
}