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
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This is a test that loops through all the feed in the 
         * allFeeds object and checks that the URL is not empty.
         */

        it('allFeeds have got the urls', function(){
            allFeeds.forEach(function(feed){
                expect(feed.urls).not.toBeNull();
            });
        });

        /* This is a test that loops through each feed
         * in the allFeeds object and checks that
         * name is not empty.
         */

         it('allFeeds have got the name', function(){
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
            });
         });
    });

    /* This is a new suite named "The menu" */
    describe('The menu icon', function() {
        /* showing and hiding of menu when clicked  on menu*/
        it('showing when icon is clicked', function() {
            $('.menu-icon-link').trigger('click'); 
            expect($('.menu').is(':visible')).toBe(false);
        });

        it('hiding when icon is clicked again', function() {
            $('.menu-icon-link').trigger('click'); 
            expect($('.menu').is(':visible')).toBe(false);
        });                
    });

    /* This is a new suite named "Initial Entries" */
    describe('Initial Entries', function () {
        /* This is a test which ensures that there is at least
         a single .entry element within the .feed container. */
         
        beforeEach(function (done) {
            window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
            setTimeout(function () {
                loadFeed(1, done());
            }, 1000);
        });

        it('has at least single entry in feed container', function(done) {
            expect($('.feed').children().length).not.toBe('0');
            done();
        }); 
    });  

    /*This is "New Feed Selection" suite*/
    describe('New Feed Selection', function(){
         /*ensures when a new feed is loaded
         by the loadFeed function that the content actually changes  */
        
        var feedcontent1;
        var feedcontent2;
        beforeEach(function(done){
            loadFeed(3, done());
            feedcontent1 = $('.feed').html();
        });

        it('changes the feed html', function(done) {
            loadFeed(2);
            feedcontent2 = $('.feed').html();
            expect(feedcontent1).not.toEqual(feedcontent2);
            done(); 
        });
    });

}());