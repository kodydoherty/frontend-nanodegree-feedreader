/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {

    //Test: RSS Feeds
    describe('RSS Feeds', function() {

        //Test: Make sure allFeeds is defined and not 0.
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        //Test: Make sure url is defined and not empty on the first feed.
        it('url is defined and not empty', function(){
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });


        //Test: Make sure name is defined and not empty on the first feed.
        it('name is defined and not empty', function(){
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    //Test: The menue button and navigation.
    describe('The menu', function() {

        //Test: Make sure the menu-hidden class is appied to the menu by default.
        it('Menu is hidden by default', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        //Test: Make sure the visibility of the menu is toggeled when the menu button is clicked.
        it('Menu visibility is toggeled when menu icon is clicked', function(){
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    //Test: Make sure ajax requests for the first entry is complete.
    describe('Initial Entries', function() {

        beforeEach(function(done){
            loadFeed(0,done);
        });
        it('loadFeed() should complete and their should be one entry in the feed', function(done){
            expect($(".feed").find("a").find("article").hasClass("entry")).toBe(true);
            done();
        });


     });

    //Test: Make sure the second feed has a different heading than the first.
    describe('New Feed Selection', function() {
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
