$(document).ready(function () {

    $('.fa-phone').click(function () {
        $('#add').append("<a href='954-256-7467'>954.256.7467</a>");
    });

    $('.fa-map-marker').click(function () {
        $('#add').append('208 SW Sunflower St, Davie, Fl 33345');
    });

    $('.fa-clock').click(function () {
        $('#add').append('Open M-F 9am-5pm / S-S 10am-4pm');
    });

    $('#phone').click(function () {
        $('#add').append('bloom@flowers.com');
    });

});
