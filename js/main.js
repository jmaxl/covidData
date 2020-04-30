var exampleJson;

$.getJSON('example.json', {format: "json"}).done(function (data) {
    exampleJson = data;
});


$(document).on('keyup', '.js-postal-code', function () {
    var postalCode = $(this).val();
    if (postalCode.length === 5) {
        var districtList = postalCodeJson[postalCode];
        $('.js-district-list').html('');
        $('.js-population-list').html('');
        if (districtList) {
            Object.keys(districtList).forEach(function (key) {
                var district = '<div><label for="district"><input type="radio" id="district" name="district" class="js-district" data-name="' + districtList[key] + '" value="' + key + '"/>' + districtList[key] + '</label></div>';
                $('.js-district-list').append(district);
            });
        } else {
            $('.js-district-list').html('Diese Postleitzahl gibt es in Halle nicht.');
        }
    }
});

$(document).on('click', '.js-district', function () {
    var districtId = $(this).val();
    var populationList = populationJson[districtId];
    var populationDevelopment = populationDevelopmentJson[districtId];

    var district = $(this).data('name');
    var population, under18, over65, averageAge, sum = 0;


    Object.keys(populationList).forEach(function (key) {
        if (key === 'ew_ins') {
            population = parseInt(populationList[key]);
        } else {
            sum += parseInt(populationList[key]) * populationListKeys[key];
        }
        if (key === 'ew_0_18') {
            under18 = (populationList[key] / populationList['ew_ins']) * 100;
        }
        if (key === 'ew_65+') {
            over65 = (populationList[key] / populationList['ew_ins']) * 100;
        }
    });

    averageAge = sum / population;

    var text = 'In meinem Viertel <br>' +
        '<span>' + district + '</span><br>' +
        'leben<br>' +
        '<span>' + population + '</span> Menschen.<br>' +
        'Davon sind <span>' + Math.round(under18) + '</span> Prozent Kinder<br>' +
        '<span>' + Math.round(over65) + '</span> Prozent sind über 65 Jahre alt.<br>' +
        'Das Durchschnittsalter in meinem Viertel beträgt <span>' + Math.round(averageAge) + '</span> Jahre.<br>'+
    'Im Jahr 2018 sind in meinem Viertel '+'<span>' + populationDevelopment["geburt"] + '</span> Menschen geboren worden.' ;
    $('.js-population-list').html(text);

});