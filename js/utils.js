/**
 * Wrapper function for document.getElementById() function

 * @param id ID of element need get
 * @return DOM document of element
 */
function $id(id) {
    return document.getElementById(id);
}

/**
 * Set text content of HTML element
 *
 * @param node HTML element of node need set text content
 * @param text String of content
 */
function $setText(node, text) {
    if(text != null) {
        node.textContent = text;
    }
}

/**
 * Get image native width & height
 * TODO sometime (at the first time), it cannot get size properly
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
        height: theImage.naturalHeight
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
