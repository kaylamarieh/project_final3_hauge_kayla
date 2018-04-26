var firstName = document.getElementById('firstname');
var lastName = document.getElementById('lastname');
var number = document.getElementById('amount');
var myForm = document.getElementById('orderform');
var myElement = document.createElement('p');
var price = {air: 32.99, ash: 27.99, earth: 23.99, fire: 36.99, ground: 28.99, metal: 42.99, sky: 26.99, snow: 45.99, sun: 38.99, water: 48.99, wind: 26.99, wood: 52.99};

myForm.addEventListener('input', function () {
    var total = price[document.getElementById('select').value];
    var result = (number).value;
    myElement.innerHTML = (firstName).value + ' ' + (lastName).value + ' your order consists of ' + (number).value + ' bouquets of ' + document.getElementById('select').value + ' flowers, for a total of ' + (total * result);
    document.getElementById('notify').appendChild(myElement);
});

$(document).ready(function () {

    $('form').submit(function (event) {
        event.preventDefault();
        $('#orderform').empty().append('<p>Thank you for your order!</p>');
    });

});
