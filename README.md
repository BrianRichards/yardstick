Yardstick
=========

Overview
--------
Measure your ideas with Yardstick.

Usage
-----

Fidelity
--------
You can change the fidelity of the page by simply adding a class to the body of the page. Available fidelities are
`ysFidelity_sketch` - (Default) Uses a hand drawn look for text and container borders.
`ysFidelity_lofi` - Uses a greyscale palatte and simple boxes for containers.


Grid
----
There are two options available for using a grid layout. 

Markup based
Add classes to markup. `col_x` where x is the number of columns you want the element to span. These classes are provided as a convenience and are not as comprehensive as some other grid systems. For more control, consider using the stylesheet based grid or swap in your favorite grid system.

Stylesheet based
Add less.js function call to selectors in stylesheet, leaving markup untouched. See http://semantic.js for more information.


Containers
----------
If you would like an HTML element rendered as container simply add the class `ysContainer` to the element.

Forms
-----
By default, the framework will automatically style form elements on the page. To disable styling of an individual element, add the class `ysNoStyle`.
