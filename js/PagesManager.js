var PagesManager = {};

/**
 * Store pages in order to set to previous page
 */
var pagesHistory = {};

var currentPage = null;

/**
 * Static function to control display between pages
 *
 * @param page Page that define in Pages variable
 */
PagesManager.setPage = function(page) {
    var ctrl = null;

    if (appcloud.controller[page.controller] == null ||
            typeof appcloud.controller[page.controller] == "undefined") {
        // If controller is not created yet, then create it
        ctrl = new page.controller();
        // Then assign this controller to
        // global variable of app for access later
        appcloud.controller[page.controller] = ctrl;
    } else {
        // If it already created
        ctrl = appcloud.controller[page.controller];
        // Call refresh method of controller
        if (ctrl.refresh && ctrl.refresh instanceof Function) {
            ctrl.refresh();
        }
    }

    if (currentPage != null) {
        // There have a page already set, hide it by add
        // `undisplayed` class to main node ID

        // Get view of current page
        var currentCtrl = appcloud.controller[currentPage.controller];
        if (currentCtrl.view) {
            var currentMainNodeId = currentCtrl.view.getMainNodeId();
            $("#" + currentMainNodeId).addClass("undisplayed");
        }
    }

    // Display page
    if (ctrl.view) {
        // update current page variable
        currentPage = page;
        // Get ID of main node and display it
        var id = ctrl.view.getMainNodeId();
        $("#" + id).removeClass("undisplayed");
    }

    // So the controller after created will live in application
    // until you turn off the app or restart it
}
