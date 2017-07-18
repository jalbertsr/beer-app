$('#button').on('click', function(e) {
    e.preventDefault()
    var beer = $('#beer').val()

    console.log(beer);

    $.ajax({
            type: 'GET',
            dataType: "json",
            url: 'https://quiet-inlet-67115.herokuapp.com/api/search/all?q=' + beer
        })
        .then(function(data) {
            console.log(data);

            var htmlArray = data.map(function (beer) {
		  		return '<option value="' + beer.id + '">' + beer.name + '</option>'
		  	})

		  	console.log(htmlList)

		  	$('#list-beers').removeClass('hidden')
		  	var htmlList = htmlArray.join('')
		  	$('#list-beers').html(htmlList)

        });

})

$('#list-beers').on('change', function (e) {
		$('#beer-container').replaceWith('<div class="row" id="beer-container"></div>')
  		var idBeer = $(this).val()

  		$.ajax({
  			url: 'https://quiet-inlet-67115.herokuapp.com/api/beer/' + idBeer
  		})
  		.then(function (data) {

  			var beerImage
  			var beerName
  			var beerDescription

  			data.labels ? beerImage =	data.labels.large : beerImage = 'http://www.aceitedearganweb.com/wp-content/uploads/2015/10/cerveza.jpg'
  			data.name ? beerName =	data.name : beerName = idBeer
  			data.description ? beerDescription =	data.description : beerDescription = '<p>No description found </p>'

  			thumbnailHtml = '<div class="col-sm-6 col-md-4 col-md-offset-4"><div class="thumbnail"><img class="img-responsive" src="'+beerImage+'"><div class="caption"><h3>'+beerName+'</h3><p>'+beerDescription+'</p></div> </div></div>';

  			$('#beer-container').append(thumbnailHtml)
  		})

});


 
