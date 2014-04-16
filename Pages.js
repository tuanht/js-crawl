/**
 * Pages.js
 *
 * Define all pages use in application, include controller of page (must have),
 * and its properties. These pages will be used in PagesManager.setPage()
 * function to show page to the user
 *
 * @author tuanht
 */

var Pages = {};

/**
 * Home page, include a input to input URL & button to execute crawl on this URL
 */
Pages.homePage = {
    controller: HomePageController
    // You can define more properties here
}
