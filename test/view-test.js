/**
 * Unit test for functions in HomePageView
 */

module("HomePageView");

/**
 * Test for `validateUrl` function
 */
test('validateUrl', function() {
    var view = new HomePageView();

    ok(view.validateUrl("https://www.simple.com/blog/"), "https://www.simple.com/blog/");
    ok(view.validateUrl("http://deepakpathak.in/2012/06/web-crawler-in-javascript/"),
        "http://deepakpathak.in/2012/06/web-crawler-in-javascript/");
    ok(view.validateUrl("https://www.google.com.vn/"), "https://www.google.com.vn");

    throws(function() {
        view.validateUrl("");
    }, "Please enter a page URL", 'validateUrl("")');

    throws(function() {
        view.validateUrl("www");
    }, "You must enter a valid page URL", 'validateUrl("www")');

    throws(function() {
        view.validateUrl("www.vn");
    }, "You must enter a valid page URL", 'validateUrl("www.vn")');

    throws(function() {
        view.validateUrl("http://www"); 
    }, "You must enter a valid page URL", 'validateUrl("http://www")');
});
