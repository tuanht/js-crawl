Array.prototype.forEachEnd = function(fun /*, thisArg */) {
    "use strict";

    if (this === void 0 || this === null) throw new TypeError();

    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun !== "function") throw new TypeError();

    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = len - 1; i >= 0; i--) {
        if (i in t) fun.call(thisArg, t[i], i, t);
    }
};

function cloneJSON(j) {
    return JSON.parse(JSON.stringify(j));
}

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
