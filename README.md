# Final Part 3
* Kayla Hauge
* 04-25-2018
* [Github Repo link](https://github.com/kaylamarieh/project_final3_hauge_kayla.git)
* [Web Host](http://kaylahauge.com/project_final3_hauge_kayla/)
* [W3C Validator](https://github.com/kaylamarieh/project_final3_hauge_kayla)
* [HTML 5 Outliner]() Sent screen shots via email

## Resources
* [jQuery Download](https://jquery.com/download/)
    * I used this site to download the jQuery file used throughout my project.
* [Font Awesome](https://fontawesome.com/)
    * I used this to download font awesome and use the icons available there. You can see the icon under the navigation on all the pages for smaller screen sizes.
* [jQuery API Documentation](https://api.jquery.com/empty/)
    * I used this to read about a way to remove child elements from the dom. I used .empty() in order to remove the child elements and then add a different element when clicking on the various icons seen under the navigation on the smaller screen sizes.
* [Parallax](http://pixelcog.github.io/parallax.js/)
    * This is the jQuery plugin used on my site. It can be seen on the "In Bloom" page on the website. What it does is created an overlap of background images which when scrolling replace each other as the background.
* [Box Loader](https://github.com/matiasdg/boxLoader-Jquery-Plugin)
    * This is another jQuery plugin used on the site. It can be seen on the "Send Flowers," "Get Flowers," and "Workshops" pages on the website. What it does is load content as the the site is scrolled.
* [W3C Validator](https://validator.w3.org/unicorn/#validate-by-uri+task_conformance)
    * I used this to validate my code and check for any errors.
* [HTML5 Outliner](https://gsnedders.html5.org/outliner/)
    * I used this to outline my code and make sure that no portions were left undefined.


## Deductions
"I reviewed the list of deductions for this assignment and in the syllabus"

## Comments
* Custom JavaScript
    * On the events page I created custom JavaScript which ads events to the page. To do this I had an empty main element on the events html, then in the JavaScript I called that element by its ID and appended a child to it which contains an image, a headline and a few paragraphs describing the event.
* Custom jQuery
    * The custom jQuery I created can be seen on every page while on the mobile sizes. Under the navigation there are four icons. They were placed there in the HTML. When the icon is clicked you get the actual information it represents. To do this I created an empty div with an id of add within the same div holding the icons. I created an event listener for a click so when the icon is clicked the div with the id of add is first emptied so that if a previously item was clicked it wont show and then a new paragraph is appended to the add div with the information about the icon.
