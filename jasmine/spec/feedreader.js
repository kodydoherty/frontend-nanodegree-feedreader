/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */

    //Test: RSS Feeds
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

        //Test: Make sure allFeeds is defined and not 0.
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        //Test: Make sure url is defined and not empty on the first feed.
        it('url is defined and not empty', function(){
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */


        //Test: Make sure name is defined and not empty on the first feed.
        it('name is defined and not empty', function(){
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    //Test: The menue button and navigation.
    describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        //Test: Make sure the menu-hidden class is appied to the menu by default.
        it('Menu is hidden by default', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });


         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

        //Test: Make sure the visibility of the menu is toggeled when the menu button is clicked.
        it('Menu visibility is toggeled when menu icon is clicked', function(){
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */

    //Test: Make sure ajax requests for the first entry is complete.
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done){
            loadFeed(0,done);
        });
        it('loadFeed() should complete and their should be one entry in the feed', function(done){
            expect($(".feed").find("a").find("article").hasClass("entry")).toBe(true);
            done();
        });


     });
    /* TODO: Write a new test suite named "New Feed Selection" */
    //Test: Make sure the second feed has a different heading than the first.
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        beforeEach(function(done){
            loadFeed(0);
            loadFeed(1,done);
        });
        it('loadFeed() should complete and load a new feed', function(done){
            var firstHeader = $(".feed").find("a").find("article").find("h2").text();
            var secondHeader = $(".feed").find("a").next().find("article").find("h2").text();

            expect(firstHeader).not.toEqual(secondHeader);
            done();
        });
    });
}());
