$('#get-movie-info').click(function(){
  $.ajax({
    type:'get',
    url: 'http://www.omdbapi.com',
    data: {
      s: $('#movie-name').val(),
      apikey: "79571dc4"
    },
    success: function(responseData) {
      $('#search-result').empty();
      $(responseData.Search).each(function(index,movie){
         $('#search-result').append(
         `<div class="search-result-movie">
            <div class="poster"></br><img src="${movie.Poster}"/></div>
            <div class="title"><br>${movie.Title}</div>
            <button class="know-more">Know More</button>
          </div>`
        );
      });
    },
    error: function(err){
      console.log(err);
    }
  })
})

//   '<br><b>Year</b>: '+responseData.Year+
//   '<br><b>Language</b>: '+responseData.Language+
//   '<br><b>Runtime</b>: '+responseData.Runtime+
//   '<br><b>Actors</b>: '+responseData.Actors+
//   '<br><b>Director</b>: '+responseData.Director+
//   '<br><b>Writer</b>: '+responseData.Writer+
//
//   '<br><b>Country</b>: '+responseData.Country+
//   '<br><b>imdbRating</b>: '+responseData.imdbRating+
//   '<br><b>Production</b>: '+responseData.Production+
//   '<br><b>BoxOffice:</b> '+responseData.BoxOffice+
//   '<br><b>Plot:</b> '+responseData.Plot
