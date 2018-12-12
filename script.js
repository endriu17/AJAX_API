var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);


function searchCountries() {
    var countryName = $('#country-name').val();
    if (!countryName.length) countryName = 'Poland';
    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList
    });
}

function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function (item) {
        $('<li>').html('<div class="header"><img src="'+item.flag+'">' + '<h2>' + item.name + '</h2></div>').appendTo(countriesList);
        $('<li>').html('<tr><th> Background information: </th></tr>').appendTo(countriesList);
        $('<li>').html('<tr><td> Capital </td>' + '<td> :  &nbsp' + item.capital + '</td></tr>').appendTo(countriesList);
        $('<li>').html('<tr><td> Land area </td>' + '<td> :  &nbsp' + item.area + '</td></tr>').appendTo(countriesList);
        $('<li>').html('<tr><td> Population </td>' + '<td> :  &nbsp' + item.population + '</td></tr>').appendTo(countriesList);
        $('<li>').html('<tr><td> Language(s) </td>' + '<td> :  &nbsp' + item.languages[0].name + '</td></tr>').appendTo(countriesList);
        $('<li>').html('<tr><td> Currency </td>' + '<td> :  &nbsp' + item.currencies[0].name + ' ' + '(' + item.currencies[0].symbol + ')' + '</td></tr>').appendTo(countriesList);
        $('<li>').html('<tr><th></th></tr>').appendTo(countriesList);
    });
}

