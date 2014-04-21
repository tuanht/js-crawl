/**
 * Async test crawl function HomePageController
 */

module("HomePageController");

/**
 * Current, my test not include image from background-image property
 */

test('getRealImageSource()', function() {
    var ctrl = new HomePageController();

    var pageUrl = "http://docs.spring.io/spring-amqp/docs/1.3.1.RELEASE/reference/html/amqp.html";
    var imgUrl = "http://docs.spring.io/spring-amqp/docs/1.3.1.RELEASE/reference/html/images/note.png"
    equal(ctrl.getRealImageSource(pageUrl, "images/note.png"), imgUrl,
        pageUrl + " contain " + imgUrl);

    pageUrl = "https://developer.chrome.com/extensions/apps";
    imgUrl = "https://developer.chrome.com/static/images/chrome-logo_2x.png";
    equal(ctrl.getRealImageSource(pageUrl, "/static/images/chrome-logo_2x.png"),
        imgUrl, pageUrl + " contain " + imgUrl);

    pageUrl = "https://www.foobar.com/";
    imgUrl = "https://www.another.com/image.jpg";
    equal(ctrl.getRealImageSource(pageUrl, imgUrl),
        imgUrl, pageUrl + " contain " + imgUrl);
});

test('crawlUrl("https://www.simple.com/blog/")', function() {
    var ctrl = new HomePageController();

    var url = "https://www.simple.com/blog/";

    // Because this is Async test, so I copy function `crawlUrl` of controller
    // to this and call success callback when it complete request
    ctrl.model = [];
    //Stop excution of qunit
    stop();
    $.crawl({
        url: url,
        type: "GET",
        success: function(data) {
            ctrl.crawlUrlSuccessCallback(url, data, true);

            equal(ctrl.model.length, 1, "1 img tag");

            // Resume excution
            start();
        }
    });
});

test('crawlUrl("http://deepakpathak.in/2012/06/web-crawler-in-javascript/")', function() {
    var ctrl = new HomePageController();

    var url = "http://deepakpathak.in/2012/06/web-crawler-in-javascript/";

    // Because this is Async test, so I copy function `crawlUrl` of controller
    // to this and call success callback when it complete request
    ctrl.model = [];
    //Stop excution of qunit
    stop();
    $.crawl({
        url: url,
        type: "GET",
        success: function(data) {
            ctrl.crawlUrlSuccessCallback(url, data, true);

            equal(ctrl.model.length, 5, "5 img tag");
            notEqual(ctrl.model[0].source.indexOf("gravatar.com"), -1, "Image 1 is from Gravatar");
            notEqual(ctrl.model[1].source.indexOf("gravatar.com"), -1, "Image 2 is from Gravatar");
            notEqual(ctrl.model[2].source.indexOf("gravatar.com"), -1, "Image 3 is from Gravatar");
            notEqual(ctrl.model[3].source.indexOf("gravatar.com"), -1, "Image 4 is from Gravatar");
            notEqual(ctrl.model[4].source.indexOf("gravatar.com"), -1, "Image 5 is from Gravatar");

            // Resume excution
            start();
        }
    });
});
