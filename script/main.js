$('video').mediaelementplayer({
        features: ['playpause', 'current', 'progress', 'duration', 'tracks', 'volume', 'fullscreen'],
        startLanguage: 'en',
        stretching: 'responsive'
      });

const vid = document.querySelector('video');
const sync = document.getElementsByClassName('sync');

vid.ontimeupdate = function() {
  for(let i = 0; i < 16; i += 1) {
    if(vid.currentTime > sync[i].getAttribute('data-start') & vid.currentTime < sync[i].getAttribute('data-end')) {
      sync[i].style.color = 'orange';
    } else {
      sync[i].style.color = null;
    }
  }
};
