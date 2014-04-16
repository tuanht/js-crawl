/**
 * Controller class that control entire home page, inherits from BaseController
 */
HomePageController = $class(BaseController, {
    init: function() {
        this.parent();
    },

    refresh: function() {

    },

    /**
     * Attach view to this controller by return a new instance of View class
     */
    getView: function() {
        return new HomePageView();
    }
});
