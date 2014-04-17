js-crawl
========

JS app which can crawl a page and produce the following report: The number of images on the page, the height and width of the images and post that information as a PUT to a website form automatically.

### MVC Framework

JS-Crawl run on a mini JS framework with these features:
+ Define a class with inherits from base class
+ Every page will have a controller (inherits from Base controller), a view (optional) Base view
class. They are configurable
+ Transfer between page easily with one function call

### OOP.js

This is core file for OOP's inherits implementation. It will help define a class with inherits
feature more easily and readable. `init` is constructor function.

Example:

```javascript
$foo = $class(Object, {
    bar: "foobar",

    init: function() {

    },

    foobar: function() {

    }
});
```

### Base controller & Base view

### Application.js

Start point of application, you can use to init all things of app, include start page,
global variable... etc

### Pages.js & PagesManager

Pages.js contain all page config will use in application, include controller and page properties.

`PagesManager.setPage` function will set page in param and display it to user. If re-set the page,
function `refresh` will be call automatically.
