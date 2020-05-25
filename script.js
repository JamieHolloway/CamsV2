var videos = [
    "ueik_Uu4xbo",
    "og8bbxl0iW8",  
    "Uy1KnGEVpTA",
    "_8fjTcV_9qI",
    "UmclL6funN8",
    "eTAsANPVqB8",
    "ZvX4KElPq2k",    
    "9lpFiNe_AoE",
    "nN_gCsKu2k4",
    "xYInTHcdkWc",
    "fvl_umojeYE",
    "scvFA-ShZwc",
    "nv-pUx0hhwY",
    "7oqtyFRHok4",
    "5aTOIIAcnPQ",
    "gYkci0rH8Ac",
    "QAU4hZoYimI",
    "v4-4p1KIQHk",
    "gUZjDCZEMDA",
    "wXYQo09Y2kc",
    "6NIt6ibAD6I",
    "48MFrf5ADp8",
    "sqAdEAH2q_g",
    "TL0weAv8C9s",
    "8UFA66bi-0g",
    "xG1fcT7BC1A"
];
var players = new Array();
var ytPlayers = new Array();

// load IFrame Player API code asynchronously
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
tag.allow =
    "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var bodyWrapper = document.createElement("div");
bodyWrapper.className = "wrapper";

var i;
for (i = 0; i < videos.length; i++) {
    players[i] = "player" + i;
    var bodyContainer = document.createElement("div");
    bodyContainer.className = "container";
    var bodyPlayer = document.createElement("div", "player" + i);
    bodyPlayer.id = "player" + i;
    bodyWrapper.appendChild(bodyContainer);
    bodyContainer.appendChild(bodyPlayer);
    document.body.appendChild(bodyWrapper);
}

// create <iframe> after API loads
var player;
function onYouTubeIframeAPIReady() {
    var i;
    for (i = 0; i < videos.length; i++) {
        player = new YT.Player("player" + i, {
            videoId: videos[i],
            events: {
                onReady: onPlayerReady,
                onStateChange: onPlayerStateChange,
            },
        });
    }
}

// called when API is ready
function onPlayerReady(event) {
    event.target.playVideo();
    player.mute();
    console.log("video url -- " + player.getVideoUrl());
}

function onPlayerStateChange(event) {}
