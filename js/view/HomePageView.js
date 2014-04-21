/**
 * View class for manipulate on GUI element of home page
 */
HomePageView = $class(BaseView, {
    init: function() {
        this.parent();

        // If param `url` in specific in URL of App when load,
        // then get and set to input box
        var urlVal = $.getUrlVar("url");
        if (typeof urlVal != "undefined" && urlVal != "") {
            var crawlUrlInput = $id("crawlUrl");
            if (typeof crawlUrlInput.value == "undefined"
                    || crawlUrlInput.value == "") {
                crawlUrlInput.value = decodeURIComponent(urlVal);
            }
        }
    },

    refresh: function() {
        this.parent();
    },

    /**
     * Set HTML main node ID will be used by this view
     */
    getMainNodeId: function(id) {
        return "homePage";
    },

    /**
     * Get String input in `crawlUrl` text box
     *
     * @return URL string
     * @throw Error Input is empty or not a URL
     */
    getCrawlUrl: function() {
        var crawlUrlInput = $id("crawlUrl");
        this.validateUrl(crawlUrlInput.value);
        return crawlUrlInput.value;
    },

    /**
     * Validate input is empty or not a URL
     *
     * @throw Error when Input is empty or not a URL
     */
    validateUrl: function(url) {
        if (url == "") {
            throw "Please enter a page URL";
        }

        var location = getLocationFromUrlString(url);

        if (location.hostname == "" || location.hostname.indexOf(".") == -1) {
            throw "You must enter a valid page URL";
        }

        return true;
    },

    /**
     * Set label that indicate the status of crawl request
     *
     * @param status String message. This message also used to add class name
     *     to stylish
     */
    setCrawlStatusLabel: function(status) {
        var label = $id("crawlStatusLabel");
        if (label) {
            $setText(label, status);
            label.className = status.toLowerCase();
        }
    },

    /**
     * Display result text of JSON object to HTML element
     *
     * @param resultObject Crawl result
     */
    displayCrawlResult: function(resultObject) {
        var node = $id("crawlResult");
        if (resultObject == null) {
            $setText(node, "");
        } else {
            $setText(node, JSON.stringify(resultObject));
        }
    }
});
