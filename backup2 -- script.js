var videos = [
  "UmclL6funN8",
  "eTAsANPVqB8",
  "9lpFiNe_AoE",
  "ZvX4KElPq2k",
  "ZvX4KElPq2k",
  "gYkci0rH8Ac",
  "gUZjDCZEMDA",
  "5aTOIIAcnPQ",
  "v4-4p1KIQHk",
  "wXYQo09Y2kc",
  "6NIt6ibAD6I",
  "xYInTHcdkWc",
  "nv-pUx0hhwY",
  "ueik_Uu4xbo",
  "og8bbxl0iW8",
  "48MFrf5ADp8",
  "7oqtyFRHok4",
  "HOgKDQp2BHE",
];
var players = new Array();
var ytPlayers = new Array();

var bodyWrapper = document.createElement("div");
bodyWrapper.className = "wrapper";
document.body.appendChild(bodyWrapper);

var i;
for (i = 0; i < videos.length; i++) {
  players[i] = "player" + i;
  var bodyContainer = document.createElement("div");
  bodyContainer.className = "container";
  var bodyPlayer = document.createElement("div", "player");
  bodyPlayer.id = players[i];
  bodyWrapper.appendChild(bodyContainer);
  bodyContainer.appendChild(bodyPlayer);
  var tag = bodyContainer.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  tag.allow =
    "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
  bodyContainer.appendChild(tag);
//   var firstScriptTag = bodyContainer.getElementsByTagName("script")[0];
//   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // create <iframe> after API loads
  function onYouTubeIframeAPIReady() {
    ytPlayer[i] = new YT.Player(players[i], {
      videoId: videos[0],
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });
  }

  // called when API is ready
  function onPlayerReady(event) {
    event.target.playVideo();
    player[i].mute();
    console.log("video url -- " + player[i].getVideoUrl());
  }

  function onPlayerStateChange(event) {}
}
