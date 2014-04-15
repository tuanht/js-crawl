/**
 * Base controller for all controller
 * @author tuanht
 */

BaseView = $class(Object, {
    /**
     * Access to controller of view
     */
    ctrl: null,

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
        // I have nothing todo here :)
    }
});
