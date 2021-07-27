const form = document.getElementById('searchContainer');
let url = 'https://itunes.apple.com/search?term=';

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const searchText = document.getElementById('search').value;
  console.log(searchText);
  search(searchText);
  form.reset();
});

function search(searchText) {
  url += searchText;
  fetch(url, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}
