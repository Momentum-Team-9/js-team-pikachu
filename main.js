const form = document.getElementById('searchContainer');
let url = 'https://itunes.apple.com/search?term=';

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
  // const preview = music.previewUrl
  return `<span class="card">
  <div class="artist">${music.artistName}
  </div>
  <div class="song">${music.trackName}
  </div><button type="button" class="play">Play</button><div class="preview"><audio controls src= ${music.previewUrl}>
  </div>`;
}

function search(searchText) {
  url += searchText;
  fetch(url, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      for (var i = 0; i < 6; i++) {
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
  }
});
