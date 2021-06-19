twitchLogo = document.getElementById("twitch-logo");
twitchLogo.src = "https://static-cdn.jtvnw.net/jtv_user_pictures/9fe525e7-c0a4-4a59-9e28-642e9b76bbec-profile_image-300x300.png";

function LinkHover(element) {
    const img = element.getElementsByTagName('img')[0];
    img.style.filter = "grayscale(0)";
}

function LinkUnhover(element) {
    const img = element.getElementsByTagName('img')[0];
    img.style.filter = "grayscale(90%)";
}