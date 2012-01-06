Yardstic
========

Overview
--------
Measure your ideas with Yardstick. Yardstick is a toolkit for creating simple wireframes and prototypes with HTML and JavaScript.

Usage
-----
Yardstick requires the following files to be included in your page:
-jQuery
	`<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>`
-yardstick.js
	`<script src="path/to/yardstick.js" type="text/javascript"></script>`
-yardstick.less or yardstick.css
	`<link href="path/to/yardstick.less" rel="stylesheet/less" type="text/css"/>`
-Less.js - if you choose to not pre-process the yardstick.less stylesheet.
	`<script src="http://cdnjs.cloudflare.com/ajax/libs/less.js/1.1.3/less-1.1.3.min.js" type="text/javascript"></script>`
-Architects Daughter Web Font - if you use sketch fidelity
	`<link href='http://fonts.googleapis.com/css?family=Architects+Daughter' rel='stylesheet' type='text/css'>`

To add Yardstick to your page, put `Yardstick.initialize()` in the onload of page.
`$(function(){
	Yardstick.initialize();
});`


Fidelity
--------
You can change the fidelity of the page by simply adding a class to the body of the page. Available fidelities are
`ysFidelity_sketch` - (Default) Uses a hand drawn look for text and container borders.
`ysFidelity_lofi` - Uses a greyscale palatte and simple boxes for containers.

You can also pass in the option `fidelity` with values of `sketch` or `lofi` in the initialize function.


Grid
----
Yardstick allows you to use whichever grid system you prefer, just add the appropriate files and markup.

If you would prefer to use a grid system in your stylesheet rather than a markup based system that requires adding classes to your HTML, consider http://semantic.gs/ as it uses less.js which is already required by Yardstick.

One thing to remember is that Yardstick does use padding and borders on classes like `ysContainer` so you may need to wrap those containers (rather than just making them grid columns directly) in order to have your grid render properly.

Containers
----------
If you would like an HTML element rendered as container simply add the class `ysContainer` to the element.

Forms
-----
By default, the framework will automatically style form elements on the page. To disable styling of an individual element, add the class `ysNoStyle`.
