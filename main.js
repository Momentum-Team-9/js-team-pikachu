const form = document.getElementById('searchContainer');
let url = 'https://proxy-itunes-api.glitch.me/search?limit=18&term=';

form.addEventListener('submit', function (event) {
  event.preventDefault();
  let searchText = document
    .getElementById('search')
    .value.trim()
    .split(' ')
    .join('+');
  search(searchText);

  form.reset();
});

function musicCardToHtml(music) {
  return `<div class="card">
<div class="albumArt">
  <img src= ${music.artworkUrl100} alt="Album art">
</div>
  <div class="artist">${music.artistName}</div>
  
  <div class="song">${music.trackName}</div>
  <button type="button" class="play" data-preview-url=${music.previewUrl}>Play</button>
  </div>`;
}

function search(searchText) {
  url += searchText;
  fetch(url, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      for (var i = 0; i < 18; i++) {
        document.querySelector('#container').innerHTML += musicCardToHtml(
          data.results[i]
        );

        console.log(data.results[i]);
      }
    });
}

//How do we pass url to eventlister?

let card = document.querySelector('.containerCard');
card.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target && e.target.matches('button.play')) {
    console.log(' was clicked!');
    console.log(e.target.dataset.previewUrl);
    // use that url as the src attribute on the audio player
    const audioPlayer = document.querySelector('#player');
    audioPlayer.src = e.target.dataset.previewUrl;
  }
});
