$(document).ready(function(){
   $('select').on('change', function (event) {
   event.preventDefault();
   $('.results').empty();

   var selection = $("select option:selected").val();
   var url = 'https://api.nytimes.com/svc/topstories/v2/' + selection + '.json';
    url += '?' + $.param({'api-key': 'f998b2b22bf342ba8fd3f6c6da7560a8'});
   $.ajax({
     url: url,
     method: 'GET',
     dataType: 'json',
     })


     .done(function (data) {
            if (data.results.length === 0) {
                $('.results').append("<p>Sorry,  please try again.</p>");
            } else {
                var nytData = data.results.filter(function (item) {
                  return item.multimedia.length;
                });
                var nytItems = nytData.slice(0,12);

                var articles = "";

                $.each(nytItems,function(index,value){
                  var articleImageUrl = value.multimedia[4].url;
                  var articleCaption = value.abstract;
                  var articleLink = value.url;

                  articles += '<a class="news" href="' + articleLink + '" style="background-image:url('+  articleImageUrl +')">';
                  articles += '<div class="article">';
                  articles += '<p class="abstract">' + articleCaption + '</p>';
                  articles += '</div>';
                  articles += '</a>';

                });
                
                $('.results').append(articles);

                 };

        });

      });

});
