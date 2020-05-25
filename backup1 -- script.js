var videos = ['UmclL6funN8','eTAsANPVqB8','9lpFiNe_AoE','ZvX4KElPq2k','ZvX4KElPq2k','gYkci0rH8Ac','gUZjDCZEMDA','5aTOIIAcnPQ','v4-4p1KIQHk','wXYQo09Y2kc','6NIt6ibAD6I','xYInTHcdkWc','nv-pUx0hhwY','ueik_Uu4xbo','og8bbxl0iW8','48MFrf5ADp8','7oqtyFRHok4','HOgKDQp2BHE'];

// load IFrame Player API code asynchronously
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
tag.allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var bodyWrapper = document.createElement('div');
bodyWrapper.className = 'wrapper';
var bodyContainer = document.createElement('div');
bodyContainer .className = 'container';
var bodyPlayer = document.createElement('div','player');
bodyPlayer.id = 'player';
bodyWrapper.appendChild(bodyContainer);
bodyContainer.appendChild(bodyPlayer);
document.body.appendChild(bodyWrapper);



// create <iframe> after API loads
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
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
  player.mute()
  console.log('video url -- ' + player.getVideoUrl())
}

// this function called when player changes state
var done = false;
function onPlayerStateChange(event) {
//   if (event.data == YT.PlayerState.PLAYING && !done) {
//     setTimeout(stopVideo, 6000);
//     done = true;
//   }
}

function stopVideo() {
  player.stopVideo();
}
