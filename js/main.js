$(document).ready(function () {

    $('#spring').parallax({imageSrc: 'img/tulips.jpg'});
    $('#summer').parallax({imageSrc: 'img/marigold.jpg'});
    $('#fall').parallax({imageSrc: 'img/sunflowers.jpg'});
    $('#winter').parallax({imageSrc: 'img/camellia.jpg'});

});

//Add a section to the events page about upcoming events
var selected = document.getElementById('events');
var newElement = document.createElement('section');

newElement.innerHTML = '<h2>Bouquets with a Twist</h2><img src= "img/flowers.jpg" alt="flowers"><p>Like painting with a twist, but with flowers! Grab your friends and join us for a fun night of bouquet building. We will take you through the step by step process of building a bouquet all while enjoying drinks and small bites. We will use seasonal flowers to build a lovely bouquet.</p><p>Call us today to reserve your spot!</>';

selected.appendChild(newElement);
