var PagesManager = {};

PagesManager.setPage = function(page) {
    if (appcloud.controller[page.controller] == null ||
            typeof appcloud.controller[page.controller] == "undefined") {
        var ctrl = new page.controller();
        appcloud.controller[page.controller] = ctrl;
    } else {
        var ctrl = appcloud.controller[page.controller];
        if (ctrl.refresh && ctrl.refresh instanceof Function) {
            ctrl.refresh();
        }
    }
}