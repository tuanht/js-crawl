/**
 * Unit test for functions in utils.js
 */

module("utils.js");

/**
 * Test `getLocationFromUrlString` function with "https://www.google.com.vn/"
 * as param
 */
test('getLocationFromUrlString("https://www.google.com.vn/")', function() {
    var location1 = getLocationFromUrlString("https://www.google.com.vn/");
    equal(location1.protocol, "https:", "Protocol is `https:`");
    equal(location1.hostname, "www.google.com.vn", 
        "Host name is `www.google.com.vn`");
    equal(location1.pathname, "/", "Path name is `/`");
    equal(location1.href, "https://www.google.com.vn/", 
        "Href is `https://www.google.com.vn/`");
});

/**
 * Test `getLocationFromUrlString` function with
 * "http://deepakpathak.in/2012/06/web-crawler-in-javascript/" as param
 */
test('getLocationFromUrlString("http://deepakpathak.in/2012/06/web-crawler-in-javascript/")', function() {
    var location2 = getLocationFromUrlString(
        "http://deepakpathak.in/2012/06/web-crawler-in-javascript/");
    equal(location2.protocol, "http:", "Protocol is `http:`");
    equal(location2.hostname, "deepakpathak.in", 
        "`Host name is deepakpathak.in`");
    equal(location2.pathname, "/2012/06/web-crawler-in-javascript/",
        "Path name is `/2012/06/web-crawler-in-javascript/`");
    equal(location2.href, "http://deepakpathak.in/2012/06/web-crawler-in-javascript/", 
        "Href is `http://deepakpathak.in/2012/06/web-crawler-in-javascript/`");
});

/**
 * Test `getImageNativeSize` function.
 * Because the image may not cached at the first times run, this test may fail
 * several times, or until you open these images in your browser
 * that run this test
 */
test('getImageNativeSize', function() {
    var imgList = [{
        src: "http://www.gravatar.com/avatar/05a8346601d9cdd6a8b62a91f29cd771?s=32",
        width: 32,
        height: 32
    }, {
        src: "http://yuiblog.com/assets/yeti/splash.jpg",
        width: 510,
        height: 300
    }, {
        src: "http://yuiblog.com/assets/yeti/multiple-browsers.jpg",
        width: 510,
        height: 210
    }, {
        src: "http://yuiblog.com/assets/yeti/mobilesafari.jpg",
        width: 267,
        height: 400
    }, {
        src: "http://1.gravatar.com/avatar/7a714bcc8296b79f17c158aeb9bf5aa1?s=32&d=&r=G",
        width: 32,
        height: 32
    }, {
        src: "https://www.google.com.vn/images/icons/product/chrome-48.png",
        width: 48,
        height: 48
    }, {
        src: "http://www.nimble.com/blog/wp-content/uploads/2011/01/lucky.jpg",
        width: 716,
        height: 477
    }, {
        src: "http://3.bp.blogspot.com/-iWPZtz0GCkI/Tttt1B0JRcI/AAAAAAAACDg/Ah-hh8vckCc/s1600/solar-power.jpg",
        width: 500,
        height: 493
    }];

    for (var i = 0; i < imgList.length; i++) {
        var img = imgList[i];
        var result = getImageNativeSize(img.src);
        deepEqual(result, {
            width: img.width,
            height: img.height
        }, img.src + " = " + img.width + "x" + img.height);
    }
});
