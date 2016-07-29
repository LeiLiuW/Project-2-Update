$(document).ready(function(){
  console.log($);

  $('select').on('change', function () {
  event.preventDefault();
  var selection = document.getElementById('dropdownOption').value;
  console.log(selection);

  var url = 'https://api.nytimes.com/svc/topstories/v2/' + selection + '.json'; // you already have var 'selection', so just input it here
      url += '?' + $.param({'api-key': 'f998b2b22bf342ba8fd3f6c6da7560a8'});

    $.ajax({
      method: 'GET',
      url: url
    })

    .done(function(data) {
      console.log(data); // check the data

      if (data.results.length === 0) {
          $('.results').append('<p>Sorry,  please try again.</p>');
      } 
      
      // else {
      //     var nytData = data.results.filter(function (item) {
      //         if (nytData.length !== 0) {
      //             nytItems += '<ul>';

      //             $.each(nytData, function(key, value) {

      //                 if (value.multimedia.length)  {
      //                   articleImageUrl = value.multimedia[4].url;
      //                   articleCaption = value.abstract;
      //                   articleLink = value.url;

      //                   nytItems += '<li>'
      //                   nytItems += '<a href=="' + articleLink + '" target="_blank">'
      //                   nytItems += '<div class="inner-tem-wrapper">';
      //                   nytItems += '<div class="article" style="background-image:url('+articleImageUrl+')">';
      //                   nytItems += '<div class="photo-meta">';
      //                   nytItems += '</div>'
      //                   nytItems += '</div>'
      //                 };
      //             });
      //         };
    });

  });


});
