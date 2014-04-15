/**
 * Core for OOP's inherits implementation
 * @author tuanht
 */

/*
 * Define parent function for class
 */
Object.prototype.parent = function() {
    var fn = arguments.callee.caller;
    if (!fn._super) return;
    return fn._super.apply(this, arguments);
}

/**
 * Set superclass for each implementation (method)
 * @param sclass Super class
 * @param impl Class implementation
 *      Inlude properties and methods (functions) declare by JSON
 */
Function.prototype._inherits = function(superclass, implementation) {
    implementation.constructor = this;
    this.prototype = implementation;

    // Loop every method
    for (var k in implementation) {
        // if method k is exists in superclass
        if (implementation[k] instanceof Function &&
                superclass.prototype[k] instanceof Function) {
            // Then set _super property of method to superclass's method
            implementation[k]._super = superclass.prototype[k]; 
        }
    }
    this.prototype.__proto__ = superclass.prototype;

    return this;
}

/**
 * Use this function to declare a class
 * @param sclass Super class
 * @param impl Class implementation.
 *      Inlude properties and methods (functions) declare by JSON
 */
function $class(sclass, impl) {
    // If implementation is null, then set to superclass
    (impl != null) || (impl = sclass, sclass = Object);
    return (function() {
        // Init is constructor function, will be call
        // automatically when create (new) class
        this.init && this.init.apply(this, arguments);
    })._inherits(sclass, impl);
}