/**
 * This class is start point of app (JS), you can use to init all things of
 * app, include controller, global variable... etc
 * @author tuanht
 */

// Store all controller, global variable...
var appcloud = {
    controller: {}
};

Application = $class(Object, {
    /**
     * First start point for application
     */
    init: function() {
        PagesManager.setPage(Pages.homePage)
    }
});
