$('#button').on('click', function(e){
	e.preventDefault()
	var beer = $('#text').val()

	console.log(beer);

	$.ajax({
		  type: 'GET',
      	  dataType: "json",
          url: 'https://quiet-inlet-67115.herokuapp.com/api/search/all?q='+beer
        })
		.then(function(data){
			console.log(data);

			var beer1 = data[0];
			var beer2 = data[1];
			var beer3 = data[2];

			var image1 = beer1.labels.medium;
			var description1 = beer1.description;
			var name1 = beer1.name;

			var image2 = beer2.labels.medium;
			var description2 = beer2.description;
			var name2 = beer2.name;

			var image3 = beer3.labels.medium;
			var description3 = beer3.description;
			var name3 = beer3.name;


			$("#image1").attr("src",image1);
			$("#description1").text(description1);
			$("#title1").text(name1);

			$("#image2").attr("src",image2);
			$("#description2").text(description2);
			$("#title2").text(name2);

			$("#image3").attr("src",image3);
			$("#description3").text(description3);
			$("#title3").text(name3);


			//-----list li-------
			// var htmlList = data.map( function(beerNames) {
   //          return '<li>'+beerNames.name +'</li>'
   //        }).join('')

   //        $('ul').html( htmlList )
		});
})
