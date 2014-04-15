/**
 * Base controller for all controller
 * @author tuanht
 */

BaseController = $class(Object, {
    /**
     * Access to view of controller
     */
    view: null,

    /**
     * This property used to store data for class
     * In original model, this property is share for both controller and view
     */
    model: null,

    /**
     * Contrustor method. All child class must call this method <this.parent()>
     * To init all the necessary things
     */
    init: function() {
        // Call getView method of child class to init any view element (if any)
        // The getView method of controller will create & return a new View
        if (this.getView) {
            this.view = this.getView.apply(this, arguments);
            this.view.ctrl = this;
        }
    }
});
