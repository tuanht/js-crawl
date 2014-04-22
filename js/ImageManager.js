/**
 * Every instance of this class will be a Image URL. Execute load image into
 * memory and get exactly width & height of image
 */
var ImageManager = $class(Object, {
    imageSource: null,
    width: null,
    height: null,

    /**
     * Contrustor create instance of image source
     *
     * @param imageSource Image URL
     */
    init: function(imageSource) {
        this.imageSource = imageSource;
    },

    /**
     * Load image to memory to properly get size of it
     */
    loadImageSize: function() {
        var self = this;
        $("<img/>")
            .attr("src", this.imageSource)
            .load(function() {
                self.imageSizeLoadCallback(this.width, this.height);
            });
    },

    /**
     * Image when load complete will call this method. This method will set
     * set size values to property for access later
     *
     * @param width Number value of width
     * @param height Number value of height
     */
    imageSizeLoadCallback: function(width, height) {
        this.width = width;
        this.height = height;
    },

    /**
     * Check for image is load complete or not,
     * by checking avaiable of size values
     *
     * @return true: Image load complete, false: Image didn't load complete
     */
    isLoadComplete: function() {
        return (this.width != null && this.height != null) ? true : false;
    }
});

/**
 * Static method, check for all images is load complete 
 * from an array of instances of ImageManager
 *
 * @param imageLoaders An array of instances of ImageManager
 * @return true: All images in loaders is load complete, false: not
 */
ImageManager.isAllImageLoadComplete = function(imageLoaders) {
    var result = false;
    imageLoaders.some(function(element, index, array) {
        if (element.isLoadComplete() == false) {
            result = false; // All images not load complete
            return true; // Break the loop
        }
        result = true;
        return false;
    });
    return result;
}
