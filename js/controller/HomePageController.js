/**
 * Controller class that control entire home page, inherits from BaseController
 */
HomePageController = $class(BaseController, {
    /**
     * Node.js RESTful API to insert report data to dababase
     */
    POST_REPORT_API_URL: "http://localhost:3000/report/",

    init: function() {
        this.parent();
        this.registerOnClickListener();
    },

    refresh: function() {
        this.parent();
    },

    /**
     * Attach view to this controller by return a new instance of View class
     */
    getView: function() {
        return new HomePageView();
    },

    /**
     * Register click event for `execCrawl` button
     */
    registerOnClickListener: function() {
        var execCrawlButton = $id("execCrawl");
        if (execCrawlButton) {
            execCrawlButton.addEventListener("click", this.onClick(this));
        }
    },

    /**
     * Callback function when click on button. I use closesure to parse param
     * when register click event
     *
     * @param self reference to `this` variable
     */
    onClick: function(self) {
        return function() {
            self.model = [];
            self.view.displayCrawlResult(null);
            try {
                self.crawlUrl(self.view.getCrawlUrl());
            } catch (error) {
                alert(error);
                self.view.setCrawlStatusLabel("Error");
            }
        };
    },

    /**
     * Begin crawl a URL to get all image.
     * $.ajax jquery function is utilised by jquery.xdomainajax.js, make it can
     * request cross-domain (avoid 'Access-Control-Allow-Origin')
     *
     * @param url Page url need to crawl
     */
    crawlUrl: function(url) {
        // Test with these pages
        // https://www.simple.com/blog/
        // http://deepakpathak.in/2012/06/web-crawler-in-javascript/

        // With https://www.google.com.vn/ on Chrome, first time run, can not
        // get any of image
        var self = this;

        this.view.setCrawlStatusLabel("Running");

        $.crawl({
            url: url,
            type: "GET",
            success: function(data) {
                self.crawlUrlSuccessCallback(url, data, false);
            }
        });
    },

    /**
     * Callback function call when crawl a page is success with data return
     * process these images to generate report
     *
     * @param url The crawled page url
     * @param data Array of img tag found by crawl function
     */
    crawlUrlSuccessCallback: function(url, data, isUnitTest) {
        var self = this;
        var head = data.forEach(function(item, index) {
            // Create HTML element by HTML code (String)
            var img = $.parseHTML(item)[0];

            if (img.src != "") {

                // Image source may be local URL like
                // this /images/icons/product/chrome-48.png
                // Append hostname to this link
                var imgLocation = getLocationFromUrlString(img.src);
                if (imgLocation.hostname == "") {
                    var urlLocation = getLocationFromUrlString(url);
                    var realImgUrl = urlLocation.protocol + "//"
                        + urlLocation.hostname + imgLocation.pathname;
                    img.src = realImgUrl;
                } else if (imgLocation.protocol == "file:") {
                    urlLocation = getLocationFromUrlString(url);
                    img.src = urlLocation.protocol + imgLocation.href.substring(
                        imgLocation.protocol.length, imgLocation.href.length);
                }

                self.pushImageReport(img);
            }
        });

        if (isUnitTest == true) {
            // Abort the below code in case run unit test
            return;
        }

        if (this.model.length == 0) {
            self.view.setCrawlStatusLabel("Ok");
            return;
        }

        // Dipslay crawl result
        console.log("Result: " + JSON.stringify(this.model));
        this.view.displayCrawlResult(this.model);

        // POST report to ajax
        $.post(this.POST_REPORT_API_URL, {
            url: url,
            imageCount: this.model.length,
            imageList: this.model
        }, function(data) {
            console.log("Insert to DB, _id: " + data._id);
            self.view.setCrawlStatusLabel("Ok");
        });
    },

    /**
     * Get size of image and push it to model to generate report
     *
     * @param img IMG HTML element
     */
    pushImageReport: function(img) {
        var imgSize = getImageNativeSize(img.src);

        // Some of image on Gravatar can not get image size,
        // so I will get from element attribute instead
        if (imgSize.width == 0) {
            imgSize.width = img.width;
        }
        if (imgSize.height == 0) {
            imgSize.height = img.height;
        }

        this.model.push({
            source: img.src,
            width: imgSize.width,
            height: imgSize.height
        });
    }
});
