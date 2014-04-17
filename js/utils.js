/**
 * Wrapper function for document.getElementById() function

 * @param id ID of element need get
 * @return DOM document of element
 */
function $id(id) {
    return document.getElementById(id);
}

function $createElement(tagName) {
    return document.createElement(tagName);
}

function $setText(node, text) {
    if(text != null) {
        node.textContent = text;
    }
}

function $setSafeHTMLText(node, text) {
    if(text != null) {
        node.innerHTML = text;
    }
}

/**
 * Get image native width & height
 *
 * @param imgSrc URL of image
 * @return JSON object contain 2 properties: width & height of image
 * @link http://css-tricks.com/snippets/jquery/get-an-images-native-width/
 */
function getImageNativeSize(imgSrc) {
    // Create new offscreen image to test
    var theImage = new Image();
    theImage.src = imgSrc;

    // Return accurate measurements from that
    return {
        width: theImage.naturalWidth,
        height: theImage.naturalWidth
    };
}

/**
 * Get location object from a URL string
 *
 * @param url String of web URL
 * @return Location object
 */
function getLocationFromUrlString(url) {
    var a = document.createElement('a');
    a.href = url;

    return {
        hostname: a.hostname,
        href: a.href,
        pathname: a.pathname,
        port: a.port,
        protocol: a.protocol
    };
}