$(document).ready(function () {

    //adds linked clickable phonenumber when phone icon is clicked on mobile
    $('.fa-phone').click(function () {
        $('#add').empty().append('<p><a href="tel:954-256-7467">954.256.7467</a></p>');
    });

    //adds address when map icon is clicked on mobile
    $('.fa-map-marker').click(function () {
        $('#add').empty().append('<p>208 SW Sunflower St, Davie, Fl 33345</p>');
    });

    //adds hours when clock icon is clicked on mobile
    $('.fa-clock').click(function () {
        $('#add').empty().append('<p>Open M-F 9am-5pm / S-S 10am-4pm</p>');
    });

    //adds linked clickable email when envelope icon is clicked on mobile
    $('.fa-envelope').click(function () {
        $('#add').empty().append('<p><a href="mailto:bloom@flowers.com">bloom@flowers.com</a></p>');
    });

});
