/**
 * View class for manipulate on GUI element of home page
 */
HomePageView = $class(BaseView, {
    init: function() {
        this.parent();
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
     */
    getCrawlUrl: function() {
        var crawlUrlInput = $id("crawlUrl");
        return crawlUrlInput.value;
    }
});
