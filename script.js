 // https://yts.am/api/v2/list_movies.json?query_term=iron%20man&sort_by=year
var page=1;
$('#get-movie-info').click(function(){
  console.log($('#movie-name').val());
  $.ajax({
    type:'get',
    url: 'http://www.omdbapi.com',
    data: {
      s: $('#movie-name').val(),
      apikey: "79571dc4"
    },
    success: function(responseData) {
      console.log(responseData);
      $('#search-result').empty();
      $(responseData.Search).each(function(index,movie){
        $('#search-result').append(
        `<div class="search-result-movie">
          <img src="${movie.Poster}" class="poster"/>
          <div class="middle">
            ${movie.Title} <br> ${movie.Year}<br>
            <a onclick="movieSelected('${movie.imdbID}')" href="#" class="know-more">Know More</a>
          </div>
        </div>`
        );
      });
    },
    error: function(err){
      console.log(err);
    }
  });
});

function movieSelected(id){
  sessionStorage.setItem('movieID',id)
  window.location='movie.html';
  // return false;
}

function movieDetails(){
  let imdbID=sessionStorage.getItem('movieID');
  $.ajax({
    type:'get',
    url: 'http://www.omdbapi.com',
    data: {
      i: imdbID,
      apikey: "79571dc4"
    },
    success: function(responseData) {
      console.log(responseData.Title);
      $('#selected-movie-details').append(
        `<div class="inside-poster"></br><img     src="${responseData.Poster}"/></div>
        <div class="selected-movie-details">
        <table>
          <tr>
            <th>Title</th>
            <td>${responseData.Title}</th>
          </tr>
          <tr>
            <th>Year</th>
            <td>${responseData.Year}</td>
          </tr>
          <tr>
            <th>Runtime</th>
            <td>${responseData.Runtime}</td>
          </tr>
          <tr>
            <th>Actors</th>
            <td>${responseData.Actors}</td>
          </tr>
          <tr>
            <th>Director</th>
            <td>${responseData.Director}</td>
          </tr>
          <tr>
            <th>Writer</th>
            <td>${responseData.Writer}</td>
          </tr>
          <tr>
            <th>Country</th>
            <td>${responseData.Country}</td>
          </tr>
          <tr>
            <th>imdbRating</th>
            <td>${responseData.imdbRating}</td>
          </tr>
          <tr>
            <th>Production</th>
            <td>${responseData.Production}</td>
          </tr>
          <tr>
            <th>BoxOffice</th>
            <td>${responseData.BoxOffice}</td>
          </tr>
        </table>

        <br><b>Plot:</b> ${responseData.Plot}
      </div>
      `);
    },
    error: function(err){
      console.log(err);
    }
  });
}
