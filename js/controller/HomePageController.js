HomePageController = $class(BaseController, {
    init: function() {
        this.parent();
    },

    refresh: function() {

    },

    getView: function() {
        return new HomePageView();
    }
});
