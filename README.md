js-crawl
========

JS app which can crawl a page and produce the following report: The number of images on the page, the height and width of the images and post that information as a PUT to a website form automatically.

Web services
============

JS-Crawl using Node.js as web services

### Install

Use command line to change directory, then type this command to download and install modules

`npm install`

### Run web services

Use command line to change directory, then type this command to run

`nodejs server.js`

### Test the App

After run web services, from your browser, type the follow URL and go:

[localhost:8080/index.html](http://localhost:8080/index.html)

To install Bookmarklet, click and drag green bookmarklet on the left to your bookmarks or favorites bar.
From now, In any page, user can click on Bookmarklet in bar to transfer to application and begin crawl there web page.

For Chrome extension, an avaiable prebuild package can be download from [Dropbox](https://dl.dropboxusercontent.com/u/25667754/js-crawl.crx).
Or you can build one for yourself by follow instruction at [Load the extension](https://developer.chrome.com/extensions/getstarted#unpacked) and [Creating a package](https://developer.chrome.com/extensions/packaging#creating). For reason, install bookmarklet is not
avaiable in Chrome extension.


Coding
======

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

### Unit testing

This application use jQuery's qunit as unit test. Open index.html file in test/ directory to run
unit test.

`getImageNativeSize` test case may fail several times because the image is not cached at the first
times run, or until you open these images in your browser that run unit test.

### POST crawl result to web service

The crawl result data will be POST to web service automatically. The server API URL is define in
`HomePageController.POST_REPORT_API_URL`.

### Web service avaiable API

* Get all report data (GET method): `/report`
* Put (insert) report data (POST method), param is JSON object: `/report`

### Bookmarklet

Bookmarklet is excute by url `javascript:location.href='http://localhost:8080/?url='+encodeURIComponent(location.href)`
