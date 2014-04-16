var PagesManager = {};

/**
 * Store pages in order to set to previous page
 */
var pagesHistory = {};

/**
 * Static function to control display between pages
 *
 * @param page Page that define in Pages variable
 */
PagesManager.setPage = function(page) {
    if (appcloud.controller[page.controller] == null ||
            typeof appcloud.controller[page.controller] == "undefined") {
        // If controller is not created yet, then create it
        var ctrl = new page.controller();
        // Then assign this controller to
        // global variable of app for access later
        appcloud.controller[page.controller] = ctrl;
    } else {
        // If it already created
        var ctrl = appcloud.controller[page.controller];
        // Call refresh method of controller
        if (ctrl.refresh && ctrl.refresh instanceof Function) {
            ctrl.refresh();
        }
    }
    // So the controller after created will live in application
    // until you turn off the app or restart it
}
