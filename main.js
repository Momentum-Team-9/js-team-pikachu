const form = document.getElementById('searchContainer');
let url = 'https://itunes.apple.com/search?term=';

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const searchText = document.getElementById('search').value;
  console.log(searchText);
  search(searchText);
  form.reset();
});

function musicCardToHtml(music) {
  return `<span class="card">
  <div class="artist">${music.artistName}
  </div>
  <div class="song">${music.trackName}
  </div>
  <div class="preview"><audio controls src= ${music.previewUrl}>
  </div>
  <span>`;
}

function search(searchText) {
  url += searchText;
  fetch(url, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      for (var i = 0; i < 50; i++) {
        document.querySelector('#container').innerHTML += musicCardToHtml(
          data.results[i]
        );

        console.log(data.results[i]);
      }
    });
}
